import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";


export default function Home() {

    return (
        <div className="card-list">
        <Card  className="card-item">
        <Card.Img variant="top" src="../../../public/book-item.jpg" />
        <Card.Body >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the  content.
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
        </Card>
        <Card  className="card-item">
        <Card.Img variant="top" src="../../../public/books.02.jpg" />
        <Card.Body >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the  content.
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
        </Card>
        <Card  className="card-item">
        <Card.Img variant="top" src="../../../public/books.03.jpg" />
        <Card.Body >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the  content.
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
        </Card>
    </div>
        
    )
}