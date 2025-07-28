import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { fetchSinglePublicBookAction } from "../../features/book/bookAction";
import Spinner from "react-bootstrap/Spinner";

import Star from "../../components/stars/Star";
import Review from "../../components/review/Review";
import { setCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const BookLandingPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true);
  const [showUrl, setShowUrl] = useState(0);

  const { selectedBook } = useSelector((state) => state.bookInfo);
  const { cart } = useSelector((state) => state.cartInfo);
  const { reviews } = useSelector((state) => state.reviewInfo);

  useEffect(() => {
    const fetchBook = async () => {
      setShowSpinner(true); // Start spinner
      await dispatch(fetchSinglePublicBookAction(slug));
      setShowSpinner(false); // Stop spinner after data is fetched
    };
    fetchBook();
  }, [dispatch, slug]);

  const handleOnCart = () => {
    toast("Book is added in cart");
    dispatch(setCart(selectedBook));
  };

  const isBookOnCart = cart.find((item) => item._id === selectedBook._id);

  //get specific review
  const bookReview = reviews.filter(
    (item) => item.bookId?._id === selectedBook?._id
  );
  console.log(bookReview);
  const avgrating = bookReview.reduce((acc, r) => acc + r.rating, 0) / bookReview.length;
    console.log(avgrating)
  return (
    <Container>
      {showSpinner && (
        <Row>
          <Col className="d-flex justify-content-center m-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )}

      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {!selectedBook?._id && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Alert variant="danger">
              This book is not available, please contact Admin!
            </Alert>
          </Col>
        </Row>
      )}

      {selectedBook?._id && (
        <>
          <Row className="gy-4">
            <Col md={6}>
              <div className="mb-2" style={{ height: "400px" }}>
                <img
                  src={
                    import.meta.env.VITE_BASE_API_URL +
                    selectedBook.imageList[showUrl]?.slice(6)
                  }
                  alt="book cover"
                  className="w-100 h-100 object-fit-contain img-fluid rounded"
                />
              </div>

              <div className="d-flex overflow-auto gap-2 py-3">
                {selectedBook.imageList?.map((url, i) => (
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + url?.slice(6)}
                    key={url}
                    width="80"
                    className="img-thumbnail"
                    alt="book thumbnail"
                    onClick={() => setShowUrl(i)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </Col>

            <Col md={6} xs={12}>
              <div className="d-flex h-100 flex-column justify-content-between">
                <div className="top">
                  <h1 className="h3">{selectedBook.title}</h1>
                  <div className="fw-bolder mb-2">
                    {selectedBook.author} - {selectedBook.year}
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>{selectedBook.genre}</span> |{" "}
                    <Star avgRating={avgrating} totalReviews={bookReview.length} />
                  </div>
                  <div className="mb-3 text-wrap">
                    {selectedBook?.description?.slice(0, 300)}...
                  </div>
                </div>
                <div className="bottom">
                  <hr />
                  <div className="d-grid">
                    <Button
                      variant="dark"
                      disabled={isBookOnCart || (selectedBook.expectedAvailable && !selectedBook.available )}
                      onClick={handleOnCart}
                    >
                      {selectedBook.expectedAvailable && !selectedBook.available
                        ? `Expected Available:  ${selectedBook.expectedAvailable.slice(
                            0,
                            10
                          )}`
                        : isBookOnCart
                        ? "Added to cart"
                        : "Add to Burrowing List"}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="my-5">
            <Col className="p-2">
              <div className=" p-4 rounded shadow-sm">
                <h2 className="text-center">More Details</h2>
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="description" title="Description">
                    {selectedBook.description}
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    <Review reviewArg = {bookReview}/>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookLandingPage;
