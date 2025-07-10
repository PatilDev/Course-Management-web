package com.dev.mycourseapp.Controler;
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

import com.dev.mycourseapp.Entity.Course;
import com.dev.mycourseapp.Service.CourseService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @GetMapping("/all-courses")
    public List<Course> getAllCoursesList() {
   
        return (courseService.showAllCourses());
    }

    @PostMapping("/add-course")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addNewCourse(course);
    }
    @PutMapping("/update/{id}")
public Course updateCourse(@PathVariable Long id, @RequestBody Course updatedCourse) {
    return courseService.updateCourse(id, updatedCourse);
}

    @DeleteMapping("delate{id}")
    public String delateCourse(@PathVariable long id)
    {
     courseService.deleteCourse(id);
     return "Course delected successfully .....!"+id;    
    }
    
    
    
    
    

}
