package com.dev.mycourseapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.mycourseapp.Entity.Course;
import com.dev.mycourseapp.Repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{
@Autowired
public CourseRepository courseRepository;

@Override
public List<Course> showAllCourses() {
    return courseRepository.findAll();
}

@Override
public Course addNewCourse(Course course) {
    return courseRepository.save(course);
   
}

@Override
public Course updateCourse(Long id, Course updatedCourse) {
    Optional<Course> existingCourse= courseRepository.findById(id);
    if(existingCourse.isPresent())
    {
        Course course = existingCourse.get();
        course.setTitle(updatedCourse.getTitle());
        course.setPrice(updatedCourse.getPrice());
        course.setDuration(updatedCourse.getDuration());
        course.setDescription(updatedCourse.getDescription());
      return courseRepository.save(course);
    }
    else{ throw new RuntimeException ("Course not found with id "+id); }  
}

@Override
public void  deleteCourse(Long id) {
    Optional<Course> courseOptional = courseRepository.findById(id);
    if(courseOptional.isEmpty())
    {
        throw new RuntimeException("Course Not Found ....!" +id);
    } 
     courseRepository.deleteById(id);
}




}
