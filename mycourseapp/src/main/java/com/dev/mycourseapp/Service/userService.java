package com.dev.mycourseapp.Service;

import java.util.List;
import java.util.Optional;

import com.dev.mycourseapp.Entity.User;

public interface userService {
    //get all user
    public List<User> allUser();

    //get one user
     public Optional<User> userByid(long id);

//new user 
public User newUser(User userdata);

//update user
public User updateUser(Long id,User userdata);

//delete ac
public void  delete(Long id );

}
