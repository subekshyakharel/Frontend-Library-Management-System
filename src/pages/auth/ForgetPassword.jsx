import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { requestPassResetApi, resetPassApi } from "../../services/authApi";

const initialState = {};
const ForgetPassword = () => {
  const timerForOtp = 60;
  const emailRef = useRef("");
  const { form, handleOnChange, passwordErrors } = useForm(initialState);
  const [otpRequested, setOtpRequested] = useState(false);
  const [isOTPPending, setIsOtpPending] = useState(false)
  const [isOtpBtnDisabled , setIsOtpBtnDisabled] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    if(counter>0){
      const timer = setInterval(()=>{
        setCounter(counter - 1)
      }, 1000)
      return ()=> clearInterval(timer)
    } else {
      setIsOtpBtnDisabled(false)
    }
  }, [counter])

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email, form);

    setIsOtpBtnDisabled(true);
    setIsOtpPending(true)
    const response =await requestPassResetApi({email});
    console.log(response);
     
    if(response.status == "success"){
      setOtpRequested(true)
    }
    setIsOtpPending(false)
  //  setIsOtpBtnDisabled(false);
    setCounter(timerForOtp)
  };

  const handleOnReset = async(e) => {
    e.preventDefault();
        const email = emailRef.current.value;
       const payload = {
        email,
      otp:form.otp, 
      password: form.password 
    }
    const response = await resetPassApi(payload);
    console.log(response)
    console.log(form);
  };

  return (
    <>
      <div className="sign-page d-flex justify-content-center align-items-center">
        <Card style={{ width: "32rem" }}>
          <Card.Body>
            <Card.Title>Forget Password?</Card.Title>
              
            <p>
              Don't worry. Fill up the form below to request OTP to reset your
              password.{" "}
            </p>
            <hr />
          
              <Form onSubmit={(e) => handleOnSubmit(e)}>
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  passRef={emailRef}
                  required
                />
                <div className="d-grid">
                  <Button disabled={isOtpBtnDisabled} type="submit">{isOTPPending? <Spinner variant="border"></Spinner>: counter> 0?`Request OTP in ${counter} sec`: "Request OTP" }</Button>
                </div>
              </Form>
           
  
               {/* show this form below once the otp is requested */}
               {
                otpRequested && <div className="mt-2">
                <Alert variant="success">
                  We have send you an OTP to your email, if email is found in
                  our system. Please check your junk/spam folder if you don't
                  see email in the inbox
                </Alert>
                <Form onSubmit={(e) => handleOnReset(e)}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    placeholder="OTP"
                    required
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="*******"
                    required
                    onChange={handleOnChange}
                  />
                  {passwordErrors.length > 0 && (
                    <div className="text-danger">
                      <ul>
                        {passwordErrors.map((error) => (
                          <li key={error}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="*******"
                    onChange={handleOnChange}
                    required
                  />

                  <div className="d-grid">
                    <Button type="submit">Reset Password</Button>
                  </div>
                </Form>
              </div>
               }
              
            <hr />
            <div className="text-center my-3">
              Ready to Login? <a href="/login">Login Now!</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ForgetPassword;
