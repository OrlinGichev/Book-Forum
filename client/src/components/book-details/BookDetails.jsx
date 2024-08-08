import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as bookService from "../../services/bookService";

import "./BookDetails.css";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);
  }, [bookId]);

  return (
    <div className="main-container">
      <div className="card-container">
        <Card className="card-item">
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="card-body">
            <div>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author}</Card.Text>
              <Card.Text>{book.genre}</Card.Text>
              <Card.Text>{book.description}</Card.Text>
            </div>
            <div className="button">
              <Button variant="primary" className="card-button edit">
                Edit
              </Button>
              <Button variant="primary" className="card-button delete">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <aside className="sidebar">
        <div className="sidebar-header">
        <h2>Comments</h2>
            <Button variant="primary" className="card-button">
              Add comment
            </Button>
        </div>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.This is some additional information that will be displayed in the
              sidebarThis is some additional information that will be displayed in the
              sidebarThis is some additional information that will be displayed in the
              sidebarThis is some additional information that will be displayed in the
              sidebarThis is some additional information that will be displayed in the
              sidebar&quot;
            </p>
            <div className="username">Author</div>
        </section>
        <section className="comments">
            <p>
            &quot;This is some additional information that will be displayed in the
              sidebar.&quot;
            </p>
            <div className="username">Author</div>
        </section>
        
      </aside>
    </div>
  );
}
