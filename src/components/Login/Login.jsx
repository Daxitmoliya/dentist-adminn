import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { googlelogin, loginuser } from '../../services/action/signup.action';


const Login = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const handlegoogle = () =>{
      dispatch(googlelogin())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      dispatch(loginuser(login.email, login.password));
    }
  };

    if (isLogin) {
      
      return(
        navigate('/home')
       
      )
    }
    else{
      return (

      <>
        <section className='form-01-main '>
            <div className='form-01-main'>
              <div className='form-cover'>
                  <div className="container">
                    <div className="row">
                     <center>
                     <div className="col-12">
                      <div class="_main_head_as">
                      <a href="#">
                        <img src="https://www.yudaah.com/demo/bootstrap-5-login-page-template-with-source-code/assets/images/vector.png" alt="" />
                      </a>
                    </div>
                   <form action="#" onSubmit={handleSubmit}>
                   <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='form-control' name="email" onChange={handleChange} />
                  </Form.Group>
              
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" className='form-control' name="password" onChange={handleChange} />
                    </Form.Group>
                    <div className='btn_uy'>
                    <Button variant="primary" type="submit">
                    Login
                  </Button>
                    </div>
                   </form>
                  <p onClick={handlegoogle} className='text-white'>Log in with Google <a href="#" className='text-primary'>Click Me</a></p>
                  {/* <p className='text-white'>
            you'have an account?{' '}
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={()=>{navigate("/Signup")}}>
               so signup
            </span>
          </p> */}
                      </div>
                     </center>
                    </div>
                  </div>
              </div>
            </div>
        </section>
      </>
    
      );
    
    }


 };

export default Login;
