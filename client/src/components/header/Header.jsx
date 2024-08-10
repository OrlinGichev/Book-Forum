// import React from 'react';
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const { isAuthenticated, email } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Book Forum</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> */}
        <Nav
          className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/books">All Books</Nav.Link>

          {isAuthenticated && (
            <div id="user">
              <Nav.Link as={Link} to="/book-create">Create Book</Nav.Link>
              <Nav.Link as={Link} to="#">Logout</Nav.Link>
            </div>
          )}

          {!isAuthenticated && (
            <div id="guest">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </div>
          )}

        </Nav>
        <div className="nav-email">{email}</div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
