import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProviders';
import { useState } from 'react';


const Login = () => {


      // ----------------------------hooks declaration ----------------------------//
      const [show, setShow]= useState(false)
      const { signInEmail } = useContext(AuthContext);
      // ----------------------------hooks ----------------------------//

      //.............................handle login in form ........................//
      const handleLoginForm = (e) => {
            e.preventDefault();

            // ...........get input from login form ............
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            // ...........get input from login form ............

            // .....sign function call to the authProvider .......//
            signInEmail(email, password)
                  .then(result => {
                        const user = result.user;
                        form.reset()
                        console.log(user);
                  }).catch(error => console.log(error.message))
            // .....sign function call to the authProvider .......//
      }
      //.............................handle login in form ........................//

      const handleCheckboxClick = (event) => {
            setShow(!show)
            
      }

      return (
            <div className='container my-5'>
                  <Form onSubmit={handleLoginForm} className='w-50 mx-auto border p-4 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type={show === true ? 'text': 'password'}  name='password' placeholder="Password" />
                        </Form.Group>
                 
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleCheckboxClick} type="checkbox" label={show === true ? 'Hide' : 'Show'} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                        Sign In
                  </Button>
            </Form>
            </div >
      );
};

export default Login;