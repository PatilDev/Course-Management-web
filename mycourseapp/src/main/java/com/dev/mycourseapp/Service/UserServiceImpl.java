package com.dev.mycourseapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.mycourseapp.Entity.User;
import com.dev.mycourseapp.Repository.UserRepo;

@Service
public class UserServiceImpl implements userService{

    @Autowired
      private UserRepo userRepo;

    @Override
    public List<User> allUser() {
       return userRepo.findAll();
    }

    @Override
    public User newUser(User userdata) {
    return userRepo.save(userdata);
    }

    @Override
    public User updateUser(Long id,User userdata) {
    Optional<User> existingUser= userRepo.findById(id);
       if(existingUser.isPresent())
       {
        User user = existingUser.get();
        user.setUserName(userdata.getUserName());
        user.setEmailId(userdata.getEmailId());
        user.setUserType(userdata.getUserType());
        return userRepo.save(user);
       }
       else throw new RuntimeException("User not Found with this id "+ id);
    }

    @Override
    public void delete(Long id) {
        Optional<User> user = userRepo.findById(id);
        if(user.isPresent())
        {
            userRepo.deleteById(id);
            System.out.println("Account deleted ...!");
        }
        else 
        {
            throw new RuntimeException("Account not found.....!");
        }
    }

    @Override
    public Optional<User> userByid(long id)
    {
    Optional<User> user = userRepo.findById(id);
    if(user.isPresent())
    {
        return user;
    }
    else{
        throw new RuntimeException("user not found");
    }
    }

    

    


}
