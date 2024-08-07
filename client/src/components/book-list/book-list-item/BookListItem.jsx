
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./BookListItem.css";

export default function BookListItem({
    // eslint-disable-next-line react/prop-types
    title,
    // eslint-disable-next-line react/prop-types
    img,
    // eslint-disable-next-line react/prop-types
    genre
}) {

    return (
        <Card className="card-item">
          <Card.Img variant="top" src= {img} />
          <Card.Body className="card-body">
            <div>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {genre}
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
    )
}