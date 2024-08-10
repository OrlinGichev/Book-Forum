import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button, Container } from 'react-bootstrap';
import * as bookService from '../../services/bookService';
import './BookCreate.css';

export default function BookCreate() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    img: '',
    description: ''
  })
//     const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState('');
//   const [img, setImg] = useState('');
//   const [description, setDescription] = useState('');

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name] : value
    });
  };

  const createBookSubmitHandler = async (e) => {
    e.preventDefault();
    
    const bookData = Object.fromEntries( new FormData(e.currentTarget) );

    try {
      await bookService.create(bookData);
      navigate('/books');
      
  } catch (error) {
      console.error(error);
  }
  };

    return ( 
 
    <Container className="create-book-form">
      <h2 className="text-center mb-4">Create a New Book</h2>
      <Form onSubmit={createBookSubmitHandler}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            name="title"
            value={formData.title}
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
            value={formData.author}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGenre" className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select            
            name="genre"
            value={formData.genre}
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
            value={formData.img}
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
            value={formData.description}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Book
        </Button>
      </Form>
    </Container>
  );
}
