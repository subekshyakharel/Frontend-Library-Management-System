import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import { newbookInput } from "../../../assets/customInput/bookInput";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const initialState = {};
const NewBookForm = () => {
  const { form, handleOnChange } = useForm(initialState);
  const [image, setImage]= useState();
  const navigate = useNavigate();

  const handleOnImageSelect =(e)=>{

setImage(e.target.files[0])
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();

    const formData = new FormData();
    console.log(form)
    for (const key in form) {
console.log(key, form[key])
        formData.append(key, form[key])      
    }
    formData.append("image", image)

    postNewBookAction(formData, navigate)
  }
  return (
    <>
      <div className="p-3">
        <Link to="/user/book">
        <IoArrowBackCircleOutline size={40}/>
        </Link>
        <h3>Insert new book details</h3>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          {newbookInput.map((input, index) => (
            <CustomInput
              onChange={handleOnChange}
              key={input.name}
              {...input}
            />
          ))}

          <Form.Group className="mb-3">
                 <Form.Label>Image</Form.Label>
                 <Form.Control onChange={handleOnImageSelect} type="file" name="image" required/>
               </Form.Group>

          <div className="d-grid">
            <Button type="submit">Add Book</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NewBookForm;
