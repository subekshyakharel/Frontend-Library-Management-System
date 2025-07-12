import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAllBorrowAction } from "../../features/borrow/borrowAction.js";

const BorrowTable = ({isAdmin}) => {
const dispatch = useDispatch()
const {allBorrows, myBorrows} = useSelector((state)=> state.borrowInfo)
const location = useLocation()
const pathname = location.pathname
const borrowSource = isAdmin? allBorrows : myBorrows

  useEffect(() => {
   dispatch(getAllBorrowAction(isAdmin))
  }, [dispatch, isAdmin]);

const handleOnSearch = ()=>{

}
  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <div>{borrowSource.length} Book(s) found!</div>
        <div>
          <Form.Control onChange={(e) => handleOnSearch(e)} />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {pathname.includes("borrow-history") && <th>Status</th>}
            <th>Thumbnail</th>
            <th>Book Title</th>
            <th>Due</th>
            <th>Returned Date</th>
            {pathname.includes("my-borrow") &&<th>Action</th> }
          </tr>
        </thead>
        <tbody>
          {borrowSource.map(
            (
              { _id, thumbnail,bookTitle, dueDate, isReturned, returnedDate,reviewId ,bookSlug},
              i
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                {pathname.includes("borrow-history") && <td>
                  {
                    isReturned ? "Returned" : "Borrowed"
                  }
                  {reviewId && " & Left Review"}
                </td>}
                
                <td className="">
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + thumbnail.slice(6)}
                    // src={imgUrl}
                    alt=""
                    width="60px"
                  />
                </td>
                <td> <a href={`/book/${bookSlug}`} target="_blank">{bookTitle}</a> </td>
                <td>
                 {dueDate.slice(0, 10)}
                </td>
                <td>
                 { isReturned ? returnedDate.slice(0, 10):"No"}
                </td>
                {pathname.includes("my-borrow") &&  <td>
                  { !isReturned && <Button variant="warning">Return Book</Button>}
                    
                {isReturned && !reviewId &&    <Button variant="warning">Leave Review</Button>}
                 {reviewId && "Reviewed"}
                  
                </td>}
               
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowTable;
