import './App.css'
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllPublicBookAction } from './features/book/bookAction';

const App= ()=> {
  const dispatch = useDispatch();

  useEffect(()=>{
    //fetch all the data then mount in the redux
    dispatch(fetchAllPublicBookAction())
  },[dispatch])

  return (
    <>
   
    <AppRoutes/>

    <ToastContainer/>
    </>
  )
}

export default App
