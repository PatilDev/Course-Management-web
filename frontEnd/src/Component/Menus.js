import React from "react";
import { Link} from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = ({ userInfo, setUserInfo }) => {


  return (
    <ListGroup>
      <ListGroupItem tag={Link} to="/">Home</ListGroupItem>
          <ListGroupItem tag={Link} to="/add_course">Add Course</ListGroupItem>
          <ListGroupItem tag={Link} to="/view_courses">View Courses</ListGroupItem>  
          <ListGroupItem tag={Link} to="/update_course">Update Course</ListGroupItem>
    </ListGroup>
  );
};

export default Menus;
