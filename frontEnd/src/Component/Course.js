import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card, CardBody, 
  CardText,  Button, Container, CardHeader
} from "reactstrap";

const Course = ({ course, onDelete }) => {
  const navigate = useNavigate();

  // Handle delete button click
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      onDelete(course.id);
    }
  };

  return (
    <center>
      <Card style={{ display: "inline-flex", margin: 6, width: 700, height: "auto" }}>
        <CardBody>
          <CardHeader className="font-weight-bold">
            <center><b>{course.title}</b></center>
          </CardHeader>

          <CardText>{course.description}</CardText>
          <CardText><b>Course Duration: </b>{course.duration}</CardText>
          <CardText><b>Price: </b>{course.price}</CardText>

          <Container className="text-center">
            <Button color="danger" onClick={handleDelete}>
              Delete
            </Button>

            <Button
              color="warning"
              style={{ marginLeft: 11 }}
              onClick={() => navigate("/update_course", { state: course })}
            >
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>
    </center>
  );
};

export default Course;
