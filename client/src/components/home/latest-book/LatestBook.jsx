/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Home.css";

export default function LatestBook({
    _id,
    title,
    img,
    genre
}) {

    return (
        <Card  className="card-item">
        <Card.Img variant="top" src={img} />
        <Card.Body >
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
             Genre: {genre}
            </Card.Text>
            <Link to={`/books/${_id}`}>
                <Button variant="primary">Details</Button>
            </Link>
        </Card.Body>
        </Card>
    )
}