import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { loginUserApi } from "../../services/authApi.js";
import { fetchUserApi } from "../../features/user/userApi.js";
import { autoLoginUser, fetchUserAction } from "../../features/user/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const initialState = { email: "", password: "" };
const SigninPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const showLoaderRef = useRef(true)

  const {user} = useSelector((state)=>state.userInfo)
useEffect(()=>{
  user?._id ? navigate("/user"): dispatch(autoLoginUser())

  if(sessionStorage.getItem("accessJWT") || localStorage.getItem("refreshJWT")){
    setTimeout(()=>{
      showLoaderRef.current = false
    }, 2000)
  } else {
    showLoaderRef.current = false
  }
 
}, [user._id, navigate, dispatch])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const {payload} = await loginUserApi(form);
      sessionStorage.setItem("accessJWT", payload.accessJWT)
      localStorage.setItem("refreshJWT", payload.refreshJWT)
      console.log(payload);
      //call api
    
      dispatch(fetchUserAction());

    } else{
      alert("Both input must be provided")
    }
  };

if(showLoaderRef.current){
  return ( 
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    )
  }

  return (
    <>
      <div className="sign-page d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Welcome to Library Management!</Card.Title>
            <hr />
            <Form onSubmit={(e) => handleOnSubmit(e)}>
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Your email"
                onChange={handleOnChange}
                required
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="*****"
                onChange={handleOnChange}
                required
              />
              <div className="d-grid">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SigninPage;
