/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./BookListItem.css";

export default function BookListItem({ title, img, genre, _id }) {
  return (
    <div className="card-items">
      <Card className="card-item">
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-body">
          <div>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>Genre: {genre}</Card.Text>
          </div>
          <Link to={`/books/${_id}`}>
            <Button variant="primary" className="card-button">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
