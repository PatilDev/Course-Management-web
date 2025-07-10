import react from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus =()=>{
    return(
     <ListGroup>
        <ListGroupItem tag={Link} to="/">Home</ListGroupItem>
        <ListGroupItem tag={Link} to="/add_course">Add Course</ListGroupItem>
        <ListGroupItem tag={Link} to="/view_courses">View Courses</ListGroupItem>
        <ListGroupItem tag={Link} to="/all_user">All User</ListGroupItem>
        <ListGroupItem tag={Link} to="#!">About</ListGroupItem>
        <ListGroupItem tag={Link} to="#!">Contact</ListGroupItem>
</ListGroup>
    );
}
export default Menus;