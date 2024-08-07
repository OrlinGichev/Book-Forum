import { useEffect, useState } from "react";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import "./BookList.css";
import * as bookService from "../../services/bookService";
import BookListItem from "./book-list-item/BookListItem";

export default function BookList() {

  const [ books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll()
      .then( result => setBooks(result));
  }, []);

  console.log(books);

  return (
    <div className="card-list">
      
        { books.map(book => (
          <BookListItem key={book._id} {...book}  />
        ))}

        { books.length === 0 && <h3 className="no-books">No books yet ! </h3> }
        
    </div>
  );
}
