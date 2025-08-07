import React, { useState, useEffect } from 'react';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './Component/Home';
import Allcourse from './Component/All_Courses';
import AddCourse from './Component/Add_Course';
import Header from './Component/Header';
import Menus from './Component/Menus';
import UpdateCourse from './Component/update_course';
import axios from 'axios';
import baseUrl from './Api/SpringBootApi';

function LoginSuccess({ setUserInfo }) {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${baseUrl}/user/me`, { withCredentials: true })
      .then(res => {
        setUserInfo(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));

        const redirectPath = localStorage.getItem("redirectPath") || "/";
        localStorage.removeItem("redirectPath");
        navigate(redirectPath);
      })
      .catch(err => {
        console.error("Login fetch failed:", err);
        navigate("/");
      });
  }, [navigate, setUserInfo]);

  return <p>Logging you in...</p>;
}

function LoginPage() {
  const handleLogin = () => {
    localStorage.setItem("redirectPath", window.location.pathname);
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <Container className="text-center mt-5">
      <h2>Please log in to continue</h2>
      <button onClick={handleLogin} className="btn btn-primary mt-3">Login with Google</button>
    </Container>
  );
}

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/user/me`, { withCredentials: true })
      .then(res => {
        setUserInfo(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch(() => {
        localStorage.removeItem("userInfo");
        setUserInfo(null);
      });
  }, []);

  return (
    <div>
      <Router>
        <ToastContainer />

        {/* Show login page if not logged in */}
        {!userInfo ? (
          <Routes>
            <Route path="*" element={<LoginPage />} />
            <Route path="/login/success" element={<LoginSuccess setUserInfo={setUserInfo} />} />
          </Routes>
        ) : (
          <Container>
            <Header userInfo={userInfo} setUserInfo={setUserInfo} />
            <Row>
              <Col md={4}>
                <Menus userInfo={userInfo} setUserInfo={setUserInfo} />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add_course" element={<AddCourse />} />
                  <Route path="/view_courses" element={<Allcourse />} />
                  <Route path="/update_course" element={<UpdateCourse />} />
                  <Route path="/login/success" element={<LoginSuccess setUserInfo={setUserInfo} />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;
