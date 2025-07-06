import { Button,Form  } from 'react-bootstrap'
import { FaPlusCircle } from "react-icons/fa";
import BookTable from '../../components/table/BookTable';
import { useEffect } from 'react';
import { adminFetchAllBookAction } from '../../features/book/bookAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Book = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(adminFetchAllBookAction())
  },[dispatch])

  return (
    <div className='p-3'>
      <h3>Book</h3>
      <hr />
      <div className='text-end'>
        <Link to="/user/new-book">
        <Button> <FaPlusCircle/> Add New book</Button>
        </Link>
      </div>

     

      <BookTable/>
    </div>
  )
}

export default Book