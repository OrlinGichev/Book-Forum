/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "./SearchBooks.css";

export default function SearchBooks({ books }) {

    
    return (
        <div className="search-results">
        <div className="search-heading-container">
            <h2 className="search-heading">Search result</h2>
        </div>
        <div className="card-list">
            {books.map(book => (
                <Card key={book._id} className="card-item">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body >
                        <Card.Title>Title: {book.title}</Card.Title>
                        <Card.Text>
                           Genre: {book.genre}
                        </Card.Text>
                        <Link to={`/books/${book._id}`}>
                            <Button variant="primary" className="card-button">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}            
        </div>
        { books.length === 0 && <h3 className="no-books">No books found ! </h3> }
    </div>
    
    );
}
