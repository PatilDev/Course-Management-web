package com.dev.mycourseapp.Entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table

public class User {
  
  @Column
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
   private Long id;

   @Column
   private String userName;
   
   @Column(unique=true)
   @NotNull
  private String emailId;

   @ElementCollection(fetch = FetchType.EAGER)
   @CollectionTable(name="UserRoles",joinColumns = @JoinColumn(name=("user_id")))
   private List<String> userType =new ArrayList<>();

   @Column 
   @NotNull
   private String password;

    public User() {
    }

    public User(String userName, String emailId, List<String> userType, String password) {
        
        this.userName = userName;
        this.emailId = emailId;
        this.userType = userType;
        this.password = password;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailId() {
        return this.emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public List<String> getUserType() {
        return this.userType;
    }

    public void setUserType(List<String> userType) {
        this.userType = userType;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User id(Long id) {
        setId(id);
        return this;
    }

    public User userName(String userName) {
        setUserName(userName);
        return this;
    }

    public User emailId(String emailId) {
        setEmailId(emailId);
        return this;
    }

    public User userType(List<String> userType) {
        setUserType(userType);
        return this;
    }

    public User password(String password) {
        setPassword(password);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(userName, user.userName) && Objects.equals(emailId, user.emailId) && Objects.equals(userType, user.userType) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, emailId, userType, password);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", userName='" + getUserName() + "'" +
            ", emailId='" + getEmailId() + "'" +
            ", userType='" + getUserType() + "'" +
            ", password='" + getPassword() + "'" +
            "}";
    }

}
