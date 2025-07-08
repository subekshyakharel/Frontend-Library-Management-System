import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import { editBookInput } from "../../../assets/customInput/bookInput";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { updateBookApi } from "../../../features/book/bookApi";
import { useState } from "react";

const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  // console.log(_id);
  const { form, setForm, handleOnChange } = useForm(initialState);
  const navigate = useNavigate();
  const [imageToDelete, setImageToDelete] = useState([]);

  const { books } = useSelector((state) => state.bookInfo);

  const [images, setImages] = useState([]);

  const handleOnImageSelect = (e) => {
    const files = [...e.target.files];
    if (files.length > 2) {
      e.target.value = "";
      return alert("Max 2 images are allowed");
    }
    setImages([...e.target.files]);
  };

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/book");
    }
  }, [_id, form._id, setForm, books, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(imageToDelete.includes(form.imgUrl)){
      return alert("Thumbnail cannot be deleted");
    }
    const {
      addedby,
      createdAt,
      lastupdatedBy,
      slug,
      updatedAt,
      __v,
      isbn,
      available,
      averageRating, 
      ...rest
    } = form;

    const formData = new FormData();
    console.log(rest);
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    images.map((image) => formData.append("images", image));
    imageToDelete.forEach((image) => formData.append("imageToDelete", image));
    const result = await updateBookApi(formData);
  };

  const handleOnImageToDelete = (e)=>{
    const {checked, value} = e.target


    checked? setImageToDelete([...imageToDelete, value]) : setImageToDelete(imageToDelete.filter(img=> img !== value))
  }
console.log(imageToDelete)
  // console.log(form);

  // const allImages = form?.imageList.includes(form?.imgUrl)
  // ? form?.imageList
  // : [form?.imgUrl, ...form?.imageList] ;

  return (
    <>
      <div className="p-3">
        <Link to="/user/book">
          <IoArrowBackCircleOutline size={40} />
        </Link>
        <h3>Edit book details</h3>
        <hr />
        <Form className="mt-2" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check // prettier-ignore
              name="status"
              type="switch"
              id="custom-switch"
              label={form.status?.toUpperCase() || ""}
              onChange={handleOnChange}
            />
          </Form.Group>
          {editBookInput.map((input, index) => (
            <CustomInput
  onChange={handleOnChange}
  key={input.name}
  {...input}
  value={
    input.type === "date"
      ? (form[input.name]?.slice(0, 10) || "")
      : (form[input.name] || "")
  }
/>

          ))}

          <div>
            <hr />
            <h4>Additional Info</h4>
            <div className="mb-2">
              Added By: {form.addedby?.name || ""} <br />
              Date : {form.createdAt?.slice(0, 10) || ""}
            </div>
            <div className="mb-2">
              Last Updated By: {form.lastupdatedBy?.name || ""} <br />
              Date : {form.updatedAt?.slice(0, 10) || ""}
            </div>
          </div>
          <hr />

          {form.imgUrl &&  (
            <div className="m-3 d-flex">
              {form.imageList.map((img) => (
                <div key={img}>
                  <Form.Check
                    type="radio"
                    name="imgUrl"
                    value={img}
                    checked={form.imgUrl === img}
                    onChange={handleOnChange}
                    label="Thumbnail"
                  />{" "}
                
                  <Form.Check type="checkbox" value={img} onChange={handleOnImageToDelete} label="Delete"/>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + img?.slice(6)}
                    // src={img}
                    alt="some img"
                    width="200px"
                    className="img-thumbnail"
                  />
                </div>
              ))}
            </div>
          )}

          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={handleOnImageSelect}
              type="file"
              name="image"
              multiple
              accept="image/*"
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="warning" type="submit">
              Update Book
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditBookForm;
