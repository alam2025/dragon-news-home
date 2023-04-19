import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './RightNav.css'
import qzone1 from './../../../assets/qZone1.png'
import qzone2 from './../../../assets/qZone2.png'
import qzone3 from './../../../assets/qZone3.png'

const Rightnav = () => {
      return (
            <div>
                  <h5 className=' fw-bold'>Login With</h5>
                  <div className=' d-flex flex-column gap-2'>
                        <Button variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>
                        <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
                  </div>

                  <div className='my-4'>
                        <h5 className=' fw-bold'>Find Us On</h5>
                        <ListGroup>
                              <ListGroup.Item className='' ><a href="#"><FaFacebook /> Facebook</a></ListGroup.Item>
                              <ListGroup.Item><a href='#'><FaTwitter /> Twitter</a></ListGroup.Item>
                              <ListGroup.Item> <a href="#"><FaInstagram /> Instragram</a></ListGroup.Item>
                        </ListGroup>
                  </div>

                  <div className={`bg-light mb-4 p-3 qzone`}>
                        <h5 className=' fw-bold'>Q-Zone</h5>
                        <div className=' d-flex flex-column gap-3'>
                              <img src={qzone1} alt='Q-zone' />
                              <img src={qzone2} alt="Q-zone" />
                              <img src={qzone3} alt="Q-zone" />
                        </div>
                  </div>
            </div>
      );
};

export default Rightnav;