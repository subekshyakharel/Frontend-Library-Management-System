import React from "react";
import Star from "../stars/Star";
import {  formatDistanceToNow } from 'date-fns'


const Review = ({reviewArg}) => {
  return (
    <>
      {reviewArg.map((r, i) => (
        <div
          key={i}
          className=" border rounded p-3 shadow d-flex review-item gap-2"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-3 fw-bold">
              {
                r.userName.split(" ")[0][0].toUpperCase() +
                r.userName.split(" ").at(-1)[0]
              }
            </div>
          </div>
          <div className="right">
            <h3>{r.title}</h3>
            <div className="d-flex gap-3">
              <Star avgRating={r.rating} />
              <span> {formatDistanceToNow( new Date(r.createdAt), { addSuffix: true })}</span>
            </div>

            <p>{r.reviewMessage}</p>
            <div className="text-end"> - {r.userName}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Review;
