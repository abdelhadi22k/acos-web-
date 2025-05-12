import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoadingOpinion() {
  return (
    <Container fluid>
   
          <Col sm={6} lg={4} className="mb-3" >
            <Placeholder animation="glow">
              <Placeholder style={{ height: '200px', width: '100%', marginBottom: '20px' }} />
              <Placeholder xs={12} className="mb-2" />
              <Placeholder xs={8} className="mb-2" />
              <Placeholder xs={6} className="mb-2" />
              <Placeholder xs={9} className="mb-2" />
              <Placeholder xs={4} className="mb-2" />
            </Placeholder>
          </Col>

    </Container>
  );
}

export default LoadingOpinion;
