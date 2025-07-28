import './App.css'
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllPublicBookAction } from './features/book/bookAction';
import { ModalWrapper } from './components/modalWrapper/ModalWrapper';
import { Button } from 'react-bootstrap';
import { getAllReviewsAction } from './features/review/reviewAction.js';

const App= ()=> {
    const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    //fetch all the data then mount in the redux
    dispatch(fetchAllPublicBookAction())
    dispatch(getAllReviewsAction())
  },[dispatch])

  return (
    <>
   
    <AppRoutes/>

    <ToastContainer/>
    <ModalWrapper />
    </>
  )
}

export default App
