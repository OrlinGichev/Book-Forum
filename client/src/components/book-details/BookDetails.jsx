import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./BookDetails.css";

export default function BookDetails() {
  return (
    <div className="card-container">
      <Card className="card-item">
        <Card.Img
          variant="top"
          src="https://danbrown.com/wp-content/uploads/2022/11/Origin_book-cover.jpg"
        />
        <Card.Body className="card-body">
          <div>
            <Card.Title>Origin</Card.Title>
            <Card.Text>adventure</Card.Text>
            <Card.Text>Very good !</Card.Text>
          </div>
          <Button variant="primary" className="card-button">
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
