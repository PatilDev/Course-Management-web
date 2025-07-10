import React, { useState, useEffect } from "react";
import Course from "./Course";
import baseUrl from "../Api/SpringBootApi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
  
  useEffect(() => {
    document.title = "All courses  || Learn Code ";
    getAllCoursesFromServer();
  }, []); // we want call only at mount (once once) so we pass []

  // function to call spring boot Api
  const getAllCoursesFromServer = () => {
    axios.get(`${baseUrl}/all-courses`).then(
      (response) => {
        console.log(response);
        setCourses(response.data);
        toast.success("Courses have been loaded", {
          position: "bottom-center",
          toastId: "course-load-toast",
        });
      }, // if success
      (error) => {
        console.log(error);
        toast.error("something went wrong");
      } // if error
    );
  };

  const [courses, setCourses] = useState([
    // { title: "JAVA FULL STACK", description: "this is java course" },
    // { title: "ADVANCE PYTHON", description: "this is java course" },
    // { title: "REACT JS", description: "this is java course" },
    // { title: "DEV OPS", description: "this is java course" },
  ]);

  return (
    <div>
      <center>
        <b>
          <h1>All Courses</h1>
        </b>
      </center>

      {
        courses.length > 0 
          ? courses.map((item) => (
              <Course key={item.id} course={item} /> // ✅ key added to remove warning
            
            ))
          : "No courses"
      }
    </div>
  );
};

export default Allcourse;
