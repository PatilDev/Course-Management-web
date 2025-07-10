import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card, CardBody, CardTitle, CardSubtitle,
  CardText, CardFooter, Button, Container, CardHeader
} from "reactstrap";

const Course = ({ course }) => {
  const navigate = useNavigate(); // ✅ must be inside the functional component

  return (
    <>
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
              <Button color="danger">Delete</Button>

              <Button
                color="warning"
                style={{ marginLeft: 11 }}
                onClick={() => navigate("/update-course", { state: course })}
              >
                Update
              </Button>
            </Container>
          </CardBody>
        </Card>
      </center>
    </>
  );
};

export default Course;
