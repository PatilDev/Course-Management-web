package com.dev.mycourseapp.Service;

import java.util.List;

import com.dev.mycourseapp.Entity.Course;


public interface CourseService {
public List<Course> showAllCourses();
public Course addNewCourse(Course course);
public Course updateCourse(Long id, Course updatedCourse);
public void deleteCourse(Long id);
}
