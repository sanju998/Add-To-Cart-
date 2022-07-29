import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fw-bold">Small Shopping Cart</Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-light fw-bold ">Cart</div>
            <div className="bg-white text-success fw-bolder rounded-circle small-circle d-flex justify-content-center align-items-center ms-1 me-3">
             {props.data} 
            </div>
            <div className="text-light fw-bold">SignIn</div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
