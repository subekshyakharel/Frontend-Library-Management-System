import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviewsAction } from '../../features/review/reviewAction';
import ReviewTable from '../../components/table/ReviewTable';

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.userInfo)
   useEffect(()=>{
      dispatch(getAllReviewsAction(user?.role==="admin"))
    },[dispatch])

  return (
     <div className='p-3'>
      <h3>Review</h3>
      <hr />
      <div className="mt-4">
      <ReviewTable/>
      </div>
      </div>
  )
}

export default ReviewsPage