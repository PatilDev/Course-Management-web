package com.dev.mycourseapp.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dev.mycourseapp.Service.CourseService;
import com.dev.mycourseapp.entity.Course;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class CourseController {

    @Autowired
    private CourseService courseService;

    // Get all courses
    @GetMapping("/all-courses")
    public List<Course> getAllCoursesList() {
        return courseService.showAllCourses();
    }

    // Add new course (No role restriction)
    @PostMapping("/add-course")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addNewCourse(course);
    }

    // Update course (No role restriction)
    @PutMapping("/update/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course updatedCourse) {
        return courseService.updateCourse(id, updatedCourse);
    }

    // Delete course (No role restriction)
    @DeleteMapping("/delete/{id}")
    public String deleteCourse(@PathVariable long id) {
        courseService.deleteCourse(id);
        return "Course deleted successfully: " + id;
    }
}
