import React from 'react'
import Form from 'react-bootstrap/Form';

const CustomInput = ({label,passRef, ...rest}) => {
  return (
    <div>
        <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest}  ref={passRef}/>
      </Form.Group>
    </div>
  )
}

export default CustomInput