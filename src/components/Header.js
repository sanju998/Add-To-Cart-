import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fw-bold">Small Shopping Cart</Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-light fw-bold ">Cart</div>
            <div className="bg-white text-success text-bold rounded-circle small-circle ms-1 me-3">
              1
            </div>
            <div className="text-light fw-bold">SignIn</div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
