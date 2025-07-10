import {
  Breadcrumb,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookListing from "../../components/bookListing/BookListing.jsx";

const AllBook = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);




  return (
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

    <BookListing bookList={publicBooks}/>
    </Container>
  );
};

export default AllBook;
