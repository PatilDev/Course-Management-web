import React, { useState, useEffect } from "react";
import Course from "./Course";
import baseUrl from "../Api/SpringBootApi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All courses  || Learn Code ";
    getAllCoursesFromServer();
  }, []);

  // GET all courses
  const getAllCoursesFromServer = () => {
    axios.get(`${baseUrl}/all-courses`).then(
      (response) => {
        setCourses(response.data);
        toast.success("Courses loaded successfully", {
          position: "bottom-center",
          toastId: "course-load-toast",
        });
      },
      (error) => {
        toast.error("Something went wrong");
      }
    );
  };

  // DELETE course by ID
  const deleteCourse = (id) => {
    axios.delete(`${baseUrl}/delete/${id}`).then(
      (res) => {
        toast.success("Course deleted successfully");
        // Remove course from state after deletion
        setCourses(courses.filter((c) => c.id !== id));
      },
      (err) => {
        toast.error("Failed to delete course");
      }
    );
  };

  return (
    <div>
      <center>
        <b>
          <h1>All Courses</h1>
        </b>
      </center>

      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} onDelete={deleteCourse} />
        ))
      ) : (
        "No courses"
      )}
    </div>
  );
};

export default Allcourse;
