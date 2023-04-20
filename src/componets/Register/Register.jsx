import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import { AuthContext } from '../Providers/AuthProviders';
import { useState } from 'react';
import { FcApproval } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
      //* ********* hooks declare ******************************//
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('')
      const [confirmPass, setConfirmPass] = useState('')
      const { emailSignUp, handleLogOut, userName } = useContext(AuthContext);
      const [show, setShow] = useState(false)
      //* ********* hooks declare ******************************//


      // *......................form handle.........................*//
      const handleRegisterForm = (e) => {
            e.preventDefault();

            //..........reset status.......//
            setError('');
            setSuccess('')
            //..........reset status.......//

            //..........get Input from form..........//
            const form = e.target;
            const name = form.name.value
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = event.target.elements.confirmPassword.value;





            //...........password strength validate.............//
            if (!/(?=.*[A-Z].*)/.test(password)) {
                  setError('Please ensure, Atleast one uppercase letter. ')
                  return;
            }
            if (!/(?=.*[!@#$&*])/.test(password)) {
                  setError('Please, ensure atleast one special letter')
                  return
            }
            if (!/(?=.*[0-9].*[0-9])/.test(password)) {
                  setError('Please, ensures altleast two digit.')
                  return
            }
            if (password.length < 8) {
                  setError('Password atleast 8 character .')
                  return;
            }
            //.........password strength validate............//

            // check confirm password 
            if (password !== confirmPassword) {
                  setError('Does not match confirm password')
                  setConfirmPass(false)
                  return
            }
            else {
                  setConfirmPass(true)

            }

            emailSignUp(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        form.reset()

                        // set use name 
                        userName(user, name)
                              .then(() => {
                                    console.log('user profile update');
                              }).catch(error => setError(error.message))

                        //varification email send 

                        sendEmailVerification(user)
                              .then(() => {
                                    alert('Please, check your email.')
                              }).catch(error => setError(error.message))

                              setSuccess('Successfully Registered')
                        handleLogOut()
                        form.reset()

                  }).catch(error => console.log(error.message))

      }


      const handleCheckboxClick = (event) => {
            setShow(!show)

      }
      // *......................form handle.........................*//
      return (
            <div className='container my-5'>
                  <Form onSubmit={handleRegisterForm} className='w-50 mx-auto border p-4 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name='name' placeholder="Enter name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" name='email' placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type={show === true ? 'text' : 'password'} name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type={show === true ? 'text' : 'password'} name='confirmPassword' placeholder="Password" required />
                              {
                                    confirmPass ? confirmPass === true ? <FcApproval /> : <ImCross />
                                          : ''
                              }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check onClick={handleCheckboxClick} type="checkbox" label={show === true ? 'Hide' : 'Show'} />
                        </Form.Group>
                        {/*-------------- status message ------------- */}
                        {
                              error && <p className=' text-danger'>{error}</p>

                        }
                        {
                              success && <p className='text-success'>{success}</p>
                        }
                        {/*-------------- status message ------------- */}

                        <Button variant="primary" type="submit">
                              Sign Up
                        </Button>
                  </Form>
            </div>
      );
};

export default Register;