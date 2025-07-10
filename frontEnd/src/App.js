// App.js
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home';
import Allcourse from './Component/All_Courses';
import AddCourse from './Component/Add_Course';
import Header from './Component/Header';
import Menus from './Component/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateCourse from './Component/update_course';
import { GetUserData } from './Api/UserDataController';
import NewOrUpdatedUser from './Api/newOrUpdateUser';

import React, { useState } from 'react';

function App() {
  const [editUser, setEditUser] = useState(null);
  const [reload, setReload] = useState(false);

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const triggerReload = () => {
    setReload(!reload);
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add_course" element={<AddCourse />} />
                <Route path="/view_courses" element={<Allcourse />} />
                <Route path="/update-course" element={<UpdateCourse />} />
                <Route
                  path="/all_user"
                  element={
                    <>
                      <NewOrUpdatedUser
                        editUser={editUser}
                        setEditUser={setEditUser}
                        reloadData={triggerReload}
                      />
                      <GetUserData
                        handleEdit={handleEdit}
                        reload={reload}
                        reloadData={triggerReload}
                      />
                    </>
                  }
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
