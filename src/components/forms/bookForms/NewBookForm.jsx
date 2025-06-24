import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import { bookInput } from "../../../assets/customInput/bookInput";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";

const initialState = {};
const NewBookForm = () => {
  const { form, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e)=>{
    e.preventDefault();

    postNewBookAction(form)
  }
  return (
    <>
      <div className="p-3">
        <h3>Insert new book details</h3>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          {bookInput.map((input, index) => (
            <CustomInput
              onChange={handleOnChange}
              key={input.name}
              {...input}
            />
          ))}

          <div className="d-grid">
            <Button type="submit">Add Book</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NewBookForm;
