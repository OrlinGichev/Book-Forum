import { Link, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";

import "./BookDetails.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";

export default function BookDetails() {

  const { email, userId, isAuthenticated } = useContext(AuthContext)
  console.log(`UserId ${userId}`);

  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const { bookId } = useParams();
  console.log(bookId);

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);
    console.log(`BookOwnerId ${book._ownerId}`)
    ;
    commentService.getAll(bookId).then(setComments);
  }, [bookId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      bookId,
      formData.get("comment")
    );
    console.log(newComment);
    setComments(state => [...state, { newComment, author: { email}}]);
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

            {userId === book._ownerId && 
                <div className="button">
                  <Button as={Link} to={`/books/${bookId}/edit`} variant="primary" className="card-button edit">
                    Edit
                  </Button>
                  <Button variant="primary" className="card-button delete">
                    Delete
                  </Button>
                </div>
            }
          </Card.Body>
        </Card>
      </div>
      <aside className="sidebar">
        <form className="sidebar-header" onSubmit={addCommentHandler}>
          <h2>Comments</h2>

          {isAuthenticated && 
              <div id="isAuthenticates">
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
              </div>
          }
        </form>
        <ul>
            {comments.map((comment) => (
                // eslint-disable-next-line react/jsx-key
            <section className="comments" key={comment._id}>
                <p>
                  &quot;{comment.text}&quot;
                </p>
                <div className="username">{comment.owner?.email}</div>
            </section> 
            ))}
        </ul>
        { comments.length === 0 && <h4 className="no-comment">No comments yet ! </h4> } 
      </aside>
    </div>
  );
}
