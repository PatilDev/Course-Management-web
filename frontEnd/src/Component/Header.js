import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';

const Header = ({ userInfo, setUserInfo }) => {
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    window.location.href = "http://localhost:8080/logout";
  };

  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">My Course App</NavbarBrand>
      {userInfo && (
        <div className="ms-auto me-2 text-white">
          {userInfo.email} &nbsp;
          <Button color="danger" size="sm" onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
