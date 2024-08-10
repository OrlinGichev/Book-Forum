import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Button, Container } from 'react-bootstrap';

import * as bookService from '../../services/bookService';
import './BookEdit.css';

export default function BookEdit() {

    const { bookId } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        img: '',
        description: '',
    })

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
                })
    },[bookId]);

    const editBookSubmitHandler = async (e) => {

        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

            try {
                await bookService.edit(bookId, values);
            } catch (error) {
                console.log(error);
            }
    }

    const changeHandler = (e) => {
            setBook( state => ({
                ...state,
                [e.target.name] : e.target.value
            }));
    };

    return (
        <Container className="create-book-form">
        <h2 className="text-center mb-4">Edit info</h2>
        <Form onSubmit={editBookSubmitHandler}>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              name="title"
              value={book.title}
              onChange={changeHandler}
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formAuthor" className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author's name"
              name="author"
              value={book.author}
              onChange={changeHandler}
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formGenre" className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Select            
              name="genre"
              value={book.genre}
              onChange={changeHandler}
              required
            >
            <option value="">Select a genre</option>
              <option value="romance">Romance</option>
              <option value="thriller">Thriller</option>
              <option value="crime">Crime</option>
              <option value="adventure">Adventure</option>
              <option value="history">History</option>
              <option value="autobiography">Autobiography</option>
            </Form.Select>
          </Form.Group>
  
          <Form.Group controlId="formImg" className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter image URL"
              name="img"
              value={book.img}
              onChange={changeHandler}
            />
          </Form.Group>
  
          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter book description"
              name="description"
              value={book.description}
              onChange={changeHandler}
              required
            />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Create Book
          </Button>
        </Form>
      </Container>
    )
}