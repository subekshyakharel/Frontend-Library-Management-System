import { Button } from 'react-bootstrap'
import './App.css'
import { AiFillAlert } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';

const App= ()=> {
  toast.success("hello")

  return (
    <>

      <h2>Comming soon........</h2>
      <Button>Click Me  <AiFillAlert/> </Button>
      <ToastContainer/>
    </>
  )
}

export default App
