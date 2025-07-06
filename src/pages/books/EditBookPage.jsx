import React from 'react'
import EditBookForm from '../../components/forms/bookForms/EditBookForm'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBookApi } from '../../features/book/bookApi'

const EditBookPage = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  const handleOnDelete = async()=>{
 console.log(_id)

 if(confirm("Are you sure you eant to delete the book.This can't be undo.")){
   const result = await deleteBookApi(_id)
result.status === "success" && navigate("/user/book")
 }
  }

  return (
    <div className='p-3'>
      {/* <h3>Edit Book Page</h3>
      <hr /> */}
      <EditBookForm/>

      <div className='d-grid px-3'>
        <Button variant='danger' onClick={handleOnDelete}>Delete</Button>
      </div>
    </div>
  )
}

export default EditBookPage