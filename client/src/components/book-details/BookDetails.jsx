import { Link, useNavigate, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as bookService from "../../services/bookService";
import * as commentService from "../../services/commentService";
import * as likesService from "../../services/likesService";

import "./BookDetails.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";

export default function BookDetails() {

  const { email, userId, isAuthenticated } = useContext(AuthContext)


  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState({ count: 0, userLiked: false });
  const { bookId } = useParams();
 

  useEffect(() => {
    bookService.getOne(bookId).then(setBook);
   
    likesService.getLikes(bookId).then(likesData => {
      const userLiked = likesData.some(like => like.userIds.includes(userId));
      const count = likesData.length > 0 ? likesData[0].userIds.length : 0;
      setLikes({ count, userLiked });
    });
  }, [bookId, userId]);


  const deleteButtonClickHandler = async () => {

    const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} ?`);	

    if (hasConfirmed) {
        await bookService.remove(bookId);

        navigate('/books');
    }
  }

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const newComment = await commentService.create(bookId, comment);

    const commentToAdd = {
      ...newComment,
      owner: { email }
    }

    setComments(state => [...state, commentToAdd]);

    setComment('');
  };

  const likeButtonClickHandler = async () => {
    if (likes.userLiked) {
      await likesService.unlikeBook(bookId, userId);
      setLikes(state => ({ count: state.count - 1, userLiked: false }));
    } else {
      await likesService.likeBook(bookId, userId);
      setLikes(state => ({ count: state.count + 1, userLiked: true }));
    }
  };

  return (
    <div className="main-container">      
      <div className="card-container">
        <Card className="card-item" id="card-item">
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
                  <Button variant="primary" className="card-button delete" onClick={deleteButtonClickHandler}>
                    Delete
                  </Button>
                </div>
            }

            {isAuthenticated && 
                <div className="likes">
                <span>{likes.count} Likes</span>
                {isAuthenticated && (
                  <Button onClick={likeButtonClickHandler}>
                    {likes.userLiked ? 'Unlike' : 'Like'}
                  </Button>
                )}
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
                    value={comment}
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
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
