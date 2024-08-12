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
      <div className="latest-book-container">
          <h2 className="latest-book">Latest Book</h2>
      </div>
      <div className="card-items">
          {latestBook.map(book => <LatestBook key={book._id}{...book} />)}
      </div>
      { latestBook.length === 0 && <h3 className="no-books">No books yet ! </h3> }
  </div>
        
    )
}