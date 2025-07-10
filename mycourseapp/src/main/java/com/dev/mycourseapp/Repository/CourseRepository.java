package com.dev.mycourseapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.mycourseapp.Entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
