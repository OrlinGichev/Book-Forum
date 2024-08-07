import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./BookList.css";
import * as bookService from "../../services/bookService";

export default function BookList() {

  const [ books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll()
      .then( result => setBooks(result));
  }, []);

  console.log(books);

  return (
    <div className="card-list">
      
        <Card className="card-item">
          <Card.Img variant="top" src="../../../public/book-item.jpg" />
          <Card.Body className="card-body">
            <div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src="../../../public/books.02.jpg" />
          <Card.Body className="card-body">
            <div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src="../../../public/books.03.jpg" />
          <Card.Body className="card-body">
            <div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src="../../../public/books.04.jpg" />
          <Card.Body className="card-body">
            <div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src="../../../public/book-item.jpg" />
          <Card.Body className="card-body">
            <div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>
            </div>
            <Button variant="primary" className="card-button">Details</Button>
          </Card.Body>
        </Card>
  
    </div>
  );
}
