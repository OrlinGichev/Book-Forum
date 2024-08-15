/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as likesService from "../../../services/likesService";
import AuthContext from "../../../contexts/authContext";
import "./BookListItem.css";

export default function BookListItem({ title, img, genre, _id }) {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [likes, setLikes] = useState({ count: 0, userLiked: false, likeId: null });

  useEffect(() => {
    const fetchLikesData = async () => {

      try {
        const likesCount  = await likesService.getLikesCount(_id);
        const { hasLiked, likedId } = await likesService.userHasLiked(_id, userId);
  
        setLikes({
          count: likesCount,
          userLiked: hasLiked,
          likedId: likedId,
        });
      } catch (error) {
        console.error('Error fetching likes data:',error);
      }
    };

    fetchLikesData();
  }, [_id, userId]);

  const likeButtonClickHandler = async () => {

    try {
      if (!likes.userLiked) {
        await likesService.likeBook(_id, userId);
       
    } else {
        await likesService.unlikeBook(likes.likeId);
    }
  
    const updatedLikesCount  = await likesService.getLikesCount(_id);
    const { hasLiked: updatedUserLiked, likeId: updatedLikeId } = await likesService.userHasLiked(_id, userId);
    
    setLikes({
        count: updatedLikesCount,
        userLiked: updatedUserLiked,
        likeId: updatedLikeId,
    });

    } catch (error) {
      console.error('Error updating likes:', error);
    }
};

  return (
    <div className="card-items">
      <Card className="card-item">
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-body">
          <div>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>Genre: {genre}</Card.Text>            
          </div>
          <div className="btn-container">
            <Link to={`/books/${_id}`}>
              <Button variant="primary" className="card-button">
                Details
              </Button>
            </Link>
            <button
              className="Btn"
              onClick={likeButtonClickHandler}
              disabled={!isAuthenticated}
            >
              <span className="leftContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"></path>
                </svg>
                <span className="like">
                  {likes.userLiked ? "Unlike" : "Like"}
                </span>
              </span>
              <span className="likeCount">{likes.count}</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
