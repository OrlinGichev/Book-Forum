import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import * as bookService from "../../services/bookService";

// eslint-disable-next-line react/prop-types
export default function Header({ onSearch }) {
    const { isAuthenticated, email } = useContext(AuthContext);
    const [searchText, setSearchText] = useState('');

    const changeHandler = (e) => {
        setSearchText(e.target.value);
    };

    const searchBookSubmitHandler = async (e) => {
        e.preventDefault();
        const resultBooks = await bookService.searchTitle(searchText);
        onSearch(resultBooks); // Извикваме функцията onSearch, за да подадем резултатите нагоре към родител
        setSearchText(""); 
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>Book Forum</Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0" navbarScroll >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/books">All Books</Nav.Link>

                    {isAuthenticated && (
                        <div id="user">
                            <Nav.Link as={Link} to="/book-create">Create Book</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
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
                <Form className="d-flex" onSubmit={searchBookSubmitHandler}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchText}
                        onChange={changeHandler}
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}
