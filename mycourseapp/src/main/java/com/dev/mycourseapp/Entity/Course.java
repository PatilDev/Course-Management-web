package com.dev.mycourseapp.entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Course {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column
private long id;
@Column
private String title;
@Column 
private String duration;
@Column 
private String price;
@Column
private String description;

    public Course() {
    }

    public Course(long id, String title, String duration, String price, String description) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.price = price;
        this.description = description;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDuration() {
        return this.duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPrice() {
        return this.price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Course id(long id) {
        setId(id);
        return this;
    }

    public Course title(String title) {
        setTitle(title);
        return this;
    }

    public Course duration(String duration) {
        setDuration(duration);
        return this;
    }

    public Course price(String price) {
        setPrice(price);
        return this;
    }

    public Course description(String description) {
        setDescription(description);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Course)) {
            return false;
        }
        Course course = (Course) o;
        return id == course.id && Objects.equals(title, course.title) && Objects.equals(duration, course.duration) && Objects.equals(price, course.price) && Objects.equals(description, course.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, duration, price, description);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", duration='" + getDuration() + "'" +
            ", price='" + getPrice() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }

    
    
    }
