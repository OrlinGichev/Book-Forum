// import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './BookCreate.css';

export default function BookCreate() {

//     const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState('');
//   const [img, setImg] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log({ title, author, genre, img, description });
//   };

    return ( 

  
    <Container className="create-book-form">
      <h2 className="text-center mb-4">Create a New Book</h2>
      <Form >
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author's name"
            // value={author}
            // onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGenre" className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select            
            // value={genre}
            // onChange={(e) => setGenre(e.target.value)}
            // required
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
            // value={img}
            // onChange={(e) => setImg(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter book description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
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
