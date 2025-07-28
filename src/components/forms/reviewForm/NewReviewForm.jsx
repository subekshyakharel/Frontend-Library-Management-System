import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import useForm from "../../../hooks/useForm";

import { newReviewInput } from "../../../assets/customInput/reviewInput";
import { postNewReviewAction } from "../../../features/review/reviewAction";
import { useDispatch } from "react-redux";

const initialState = {};
const NewReviewForm = ({borrowData}) => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const handleOnSubmit = (e)=>{
    e.preventDefault();

 //form data
    //info on borrow history
    const obj = {
      ...form,
      borrowId: borrowData._id,
      bookId: borrowData.bookId
    }
    dispatch(postNewReviewAction(obj))
   
  }
  return (
    <>
      <div className="p-3">
        <Form onSubmit={handleOnSubmit}>
          {newReviewInput.map((input, index) => (
            <CustomInput
              onChange={handleOnChange}
              key={input.name}
              {...input}
            />
          ))}

          <div className="d-grid">
            <Button type="submit">Leave Review</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NewReviewForm;
