package com.dev.mycourseapp.Controler;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.mycourseapp.Entity.User;
import com.dev.mycourseapp.Service.userService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
 @Autowired
 private userService userService;
//Get
@GetMapping("/byid")
public Optional<User> getuser(@PathVariable Long id) {

    return userService.userByid(id);
}
@GetMapping("/list")
public List<User> getAllUsers ()
    {
      return userService.allUser();
    }

//post
@PostMapping("/newuser")
public User postMethod(@RequestBody User userdata) {
    userdata.setId(null);
return userService.newUser(userdata);
}

//Put Mapping
@PutMapping("update/{id}")
public User putMethod(@PathVariable Long id, @RequestBody User user) {
    return userService.updateUser(id, user);
}

//delete mapping
@DeleteMapping("/delete/{id}")
public void deleteMethod(@PathVariable Long id)
{
     userService.delete(id);
}



}
