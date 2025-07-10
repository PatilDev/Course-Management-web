import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import baseUrl from "../Api/SpringBootApi";
import { toast } from "react-toastify";

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: "",
    duration: ""
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/add-course`, course)
      .then((res) => {
        toast.success("Course added successfully");
        setCourse({ title: "", description: "", price: "", duration: "" });
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleForm} style={{
      margin: 50, padding: 30, backgroundColor: "cyan",
      border: "solid", borderColor: "darkmagenta"
    }}>
      <h1 className="text-center my-3">Add Course</h1>

      <FormGroup>
        <Label for="title"><b>Course Title</b></Label>
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
        <Label for="description"><b>Course Description</b></Label>
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
        <Label for="price"><b>Price</b></Label>
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
        <Label for="duration"><b>Duration</b></Label>
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
        <Button type="submit" color="success"><b>Add</b></Button>
      </Container>
    </Form>
  );
};

export default AddCourse;
