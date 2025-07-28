import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Star from "../stars/Star";
import { updateReviewStatusAction } from "../../features/review/reviewAction";

const ReviewTable = () => {
  const { reviews } = useSelector((state) => state.reviewInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [displayReviews, setDisplayReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayReviews(reviews);
  }, [reviews]);

const handleOnStatus = (obj)=>{
  if(confirm("Are you sure you want ot change the status of this review?")){
    dispatch(updateReviewStatusAction(user?.role === "admin", obj))
  }
}
  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <div>{displayReviews.length} Reviews(s) found!</div>
        <div>
          <Form.Control onChange={(e) => handleOnSearch(e)} />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {displayReviews.map(({ _id , title, reviewMessage, rating, isApproved, bookId}, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>
                <div><a href={"/book/" + bookId.slug} target="_blank">{bookId?.title}</a></div>
                 <img
                    src={import.meta.env.VITE_BASE_API_URL + bookId?.imgUrl?.slice(6)}
                    // src={imgUrl}
                    alt=""
                    width="200px"
                  />
              </td>
              <td>
                <p>status: 
                  <Form>
                    <Form.Check type="switch" 
                    checked={isApproved}
                    className={isApproved ? "text-success" : "text-danger"}
                    label={isApproved ? "Approved" : "Not Approved"}
                    onClick={()=>handleOnStatus({_id, isApproved: !isApproved})}
                    >
                    
                    </Form.Check>
                  </Form>
                </p>
                <p>Title: {title}</p>
                <p>Message: {reviewMessage}</p>
                <div>Ratings: <Star avgRating={rating}></Star> </div>
                <p><Button variant="danger"> Delete</Button></p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReviewTable;
