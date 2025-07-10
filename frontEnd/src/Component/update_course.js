import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import baseUrl from "../Api/SpringBootApi";
import { toast } from "react-toastify";

const UpdateCourse = () => {
  const location = useLocation();
  const courseFromState = location.state;

  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    duration: ""
  });

  useEffect(() => {
  if (courseFromState) {
    setCourse({
      id: courseFromState.id || "",
      title: courseFromState.title || "",
      description: courseFromState.description || "",
      price: courseFromState.price || "",
      duration: courseFromState.duration || ""
    });
  }
}, [courseFromState]);
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/update/${course.id}`, course)
      .then((res) => {
        toast.success("Course updated successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <Form
      onSubmit={handleForm}
      style={{
        margin: 50,
        padding: 30,
        backgroundColor: "cyan",
        border: "solid",
        borderColor: "darkmagenta"
      }}
    >
      <h1 className="text-center my-3">Update Course</h1>

      <FormGroup>
        <Label for="title">
          <b>Course Title</b>
        </Label>
        <Input
          type="text"
          placeholder="Enter Title"
          name="title"
          id="title"
          onChange={handleChange}
          value={course.title}
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">
          <b>Course Description</b>
        </Label>
        <Input
          type="textarea"
          placeholder="Enter Description"
          name="description"
          id="description"
          onChange={handleChange}
          value={course.description}
          style={{ height: 100 }}
        />
      </FormGroup>

      <FormGroup>
        <Label for="price">
          <b>Price</b>
        </Label>
        <Input
          type="text"
          placeholder="... RS"
          name="price"
          id="price"
          onChange={handleChange}
          value={course.price}
        />
      </FormGroup>

      <FormGroup>
        <Label for="duration">
          <b>Duration</b>
        </Label>
        <Input
          type="text"
          placeholder=".. MONTH OR DAY"
          name="duration"
          id="duration"
          onChange={handleChange}
          value={course.duration}
        />
      </FormGroup>

      <Container className="text-center">
        <Button type="submit" color="primary">
          <b>Update</b>
        </Button>
      </Container>
    </Form>
  );
};

export default UpdateCourse;
