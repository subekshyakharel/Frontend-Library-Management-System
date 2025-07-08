import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a from '../../assets/img/a.jpg'
import {Link} from 'react-router-dom'

const CustomCard = ({imgUrl= a, title="Book Title", author="Authour name", year="2030", slug="book_title" }) => {
   return (
    <Card style={{ width: '18rem' }}>
        <div className="p-3">
      <Card.Img variant="top" 
      // src={imgUrl} 
      src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}      
      className='rounded' />
      </div>
            <hr />
      <Card.Body className='text-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} -{year}
        </Card.Text>
        <Link to={"/book/"+ slug}>
        <Button variant="dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CustomCard