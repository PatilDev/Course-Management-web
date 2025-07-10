package com.dev.mycourseapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.mycourseapp.Entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
