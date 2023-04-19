import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../SharePages/leftNav/LeftNav';
import NewsHome from '../NewsHome/NewsHome';
import Rightnav from '../SharePages/RightNav/Rightnav';

const Home = () => {
      return (
            <Container className='mt-5'>
                  <Row xs={1} md={2} lg={3}>
                        
                              <Col md={4} lg={3}><LeftNav/></Col>
                              <Col md={8} lg={6}><NewsHome/></Col>
                              <Col lg={3}><Rightnav/></Col>
                        
                        
                  </Row>
            </Container>
      );
};

export default Home;