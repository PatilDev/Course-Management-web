import React, { useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container,
  Button,
} from "reactstrap";
import baseUrl from "../Api/SpringBootApi";
import axios from "axios";

function Home() {
  useEffect(() => {
    document.title = "Home || Learn Code";
  }, []);

  return (
    <div >
      <ListGroup className="text-center">
        <ListGroupItem style={{ backgroundColor: "lightgreen", margin: 10 }}>
          <ListGroupItemHeading>
            <b>Learn code with Devendra Patil</b>
          </ListGroupItemHeading>
             <h5>
          <ListGroupItemText>
              This is developed by Devendra for learning purpose. <br />
              This project uses React.js for frontend and Spring Boot for backend.
          </ListGroupItemText>
         </h5>
          <Container>
            <Button color="primary" outline>Start Using</Button>
            
          </Container>
          {useEffect(() => {
  axios.get(`${baseUrl}/me`, { withCredentials: true })
    .then(res => {
      console.log("Logged-in user:", res.data);
    })
    .catch(err => {
      console.error("Not logged in");
    })
}, [])}

        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Home;
