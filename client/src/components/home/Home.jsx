import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";
import * as bookService from '../../services/bookService';
import { useEffect, useState } from 'react';
import LatestBook from './latest-book/LatestBook';


export default function Home() {

  const [latestBook, setLatestBook] = useState([]);

  useEffect(() => {
    bookService.getLatest()
      .then(result => setLatestBook(result));
  },[]);

    return (
        <div className="card-list">
          <h2>Latest Book</h2>
          {latestBook.map(book => <LatestBook key={book._id}{...book} />)}

          { latestBook.length === 0 && <h3 className="no-books">No books yet ! </h3> }
        </div>
        
    )
}