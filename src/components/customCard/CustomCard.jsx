import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a from '../../assets/img/a.jpg'
import {Link} from 'react-router-dom'

export const CustomCard = ({imgUrl= a, title="Book Title", author="Authour name", year="2030", slug="book_title" }) => {
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

export const CustomListCard = ({
  imgUrl = a,
  title = "Book Title",
  author = "Author name",
  year = "2030",
  slug = "book_title",
  description = "This is a short description of the book. It explains what the book is about in brief.", // ✅ Added description
}) => {
  return (
    <Card className="mb-3 shadow-sm border-0">
      <div className="d-flex flex-column flex-md-row gap-3 p-3 align-items-start">
        
        {/* === Book Image === */}
        <div>
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
            style={{
              width: "120px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "5px",
            }} 
          />
        </div>

        {/* === Book Content === */}
        <div className="flex-grow-1">
          <Card.Body className="p-0">
            <Card.Title className="fs-5 fw-semibold mb-1">{title}</Card.Title>
            <Card.Text className="text-muted small mb-1">
              {description.length > 100
                ? description.slice(0, 200) + "..."
                : description}
            </Card.Text> 
            <Card.Text className="text-secondary small mb-2">
              {author} — {year}
            </Card.Text> 
            
            <Link to={`/book/${slug}`}>
            <div className=' mt-2'>
              <Button variant="dark" className=''>View Details</Button> 
              </div>
            </Link>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};



