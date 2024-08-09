import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";

import "./BookDetails.css";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);

    commentService.getAll().then(setComments);
  }, [bookId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      bookId,
      "User",
      formData.get("comment")
    );

    setComments(state => [...state, newComment]);
  };

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
        <form className="sidebar-header" onSubmit={addCommentHandler}>
          <h2>Comments</h2>
          <input
            type="text"
            className="add-comment"
            placeholder="Enter your comment"
            name="comment"
            required
          />
          <Button variant="primary" className="card-button" type="submit">
            Add comment
          </Button>
        </form>
        <ul>
            {comments.map(comment => (
                // eslint-disable-next-line react/jsx-key
                <section className="comments" key={comment._id}>
                <p>
                  &quot;{comment.text}&quot;
                </p>
                <div className="username">User</div>
            </section> 
            ))}
        </ul>
        { comments.length === 0 && <h3 className="no-comment">No comments yet ! </h3> } 
      </aside>
    </div>
  );
}
