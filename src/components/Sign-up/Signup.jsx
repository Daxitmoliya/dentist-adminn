import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userCreate } from '../../services/action/signup.action';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignUp } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userCreate(formData.email, formData.password));
  };

  if (isSignUp === true) {
    navigate('/');
  } else {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <Form.Group style={{ marginBottom: '15px' }} controlId="formBasicName">
                <Form.Label style={{ fontWeight: 'bold' }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }} />
              </Form.Group>
              <Form.Group style={{ marginBottom: '15px' }} controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }} />
              </Form.Group>
              <Form.Group style={{ marginBottom: '15px' }} controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }} />
              </Form.Group>
              <Form.Group style={{ marginBottom: '15px' }} controlId="formBasicConfirmPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }} />
              </Form.Group>
              <p style={{ marginTop: '10px', fontSize: '14px' }}>
                Already have an account?{' '}
                <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/')}>
                  Login here
                </span>
              </p>
              <Button variant="primary" type="submit" style={{ backgroundColor: '#007bff', border: 'none', padding: '10px 20px', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
};

export default Signup;
