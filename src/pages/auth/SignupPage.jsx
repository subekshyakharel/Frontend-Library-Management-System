import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import CustomInput from "../../components/customInput/CustomInput";
import { userSignUpInput } from "../../assets/customInput/userSignUpInput";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authApi";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
};
const SignupPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  // console.log(form)

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form)

    const { confirmPassword, ...rest } = form;
    if (confirmPassword != rest.password) return alert("Password donot match!");

    const { status, message } = await signUpNewUserApi(rest);
    // console.log(status, message)
    status === "success" && setForm(initialState);
  };
  // console.log(passwordErrors)
  return (
    <div className="d-flex justify-content-center p-4 ">
      <Form
        onSubmit={handleOnSubmit}
        className="card p-5"
        style={{ width: "450px" }}
      >
        <h1>Join our Library Community!!</h1>
        <hr />
        {userSignUpInput.map((input) => (
          <CustomInput
            value={form[input.name] || ""}
            key={input.name}
            {...input}
            onChange={handleOnChange}
          />
        ))}

        <Form.Label>Role</Form.Label>
        <Form.Select
          name="role"
          onChange={handleOnChange}
          value={form.role}
          required
        >
          <option value="">--Select--</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Form.Select>

        {/* <div className="py-2">
            <ul className='text-danger'>
              
            {
              passwordErrors.map((error)=>{
                return <li key={error}>{error}</li>
              })
            }
            </ul>
          </div> */}

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
