import React, { useEffect } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import BookListing from '../../components/bookListing/BookListing'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query')
    const navigate = useNavigate();
    

    useEffect(()=>{
        !query && navigate("/");
    }, [query, navigate])

    const {publicBooks} = useSelector((state)=>state.bookInfo)
    const searchBookArg = publicBooks.filter((book)=>{
        const text = (book.title + "" + book.description)?.toLowerCase();
        return text.includes(query?.toLowerCase())
    })
  return (
    <div>
         <Container>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All books
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

    <BookListing bookList={searchBookArg}/>
    </Container>
    </div>
  )
}

export default Search