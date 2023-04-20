import React from 'react';
import logo from './../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { RxAvatar } from "react-icons/rx";

const Header = () => {
      const { user, loading, handleLogOut } = useContext(AuthContext);

      if (loading) {
            return <progress className="progress w-56"></progress>
      }



      return (
            <div className=' text-center container gap-5 justify-content-center align-items-center mt-5'>

                  <img src={logo} alt="The Dragan News" />
                  <p className=' text-success'>Journalism Without Fear or Favour</p>
                  {
                        moment().format("dddd, MMMM D, YYYY")
                  }

                  <div className='d-flex bg-light p-3 my-4'>
                        <button className='btn btn-danger'>Latest</button>

                        <Marquee className='text-danger ' speed={100}>A sad news.. In Bongo Bazer , a afraidable fire is occur. Every has lost his dream. You come ahead to help this people...</Marquee>

                  </div>

                  {/* navbar  */}
                  <Navbar bg="bg-body" variant="bg-body">
                        <Container>
                              {user && <h4>{user.displayName}</h4>}

                              <Nav className="mx-auto header d-flex gap-4">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/career">Career</Link>
                              </Nav>
                              <div className='d-flex justify-content-center align-items-center gap-3'>
                                    {

                                          user ? <>
                                                {
                                                      user.photoURL ? <img src={user.photoURL} alt="Profile" className=' rounded-circle w-50' /> : <RxAvatar size={60} />
                                                }
                                          </>
                                                : ''
                                    }
                                    {
                                          user ? <Button onClick={handleLogOut} className='btn border-0 bg-transparent text-dark'>LogOut</Button> : <>
                                                <Link to='/login'>Sign In</Link>
                                                <Link to='/register'>Sign Up</Link>
                                          </>
                                    }

                              </div>
                        </Container>
                  </Navbar>

            </div>
      );
};

export default Header;