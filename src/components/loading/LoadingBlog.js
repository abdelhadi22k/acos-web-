import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoadingBlog() {
  return (
    <Container fluid>
      <Row>
        {[...Array(3)].map((_, idx) => (
          <Col sm={6} lg={4} className="mb-3" key={idx}>
            <Placeholder animation="glow">
              <Placeholder style={{ height: '200px', width: '100%', marginBottom: '20px' }} />
              <Placeholder xs={12} className="mb-2" />
              <Placeholder xs={8} className="mb-2" />
              <Placeholder xs={6} className="mb-2" />
              <Placeholder xs={9} className="mb-2" />
              <Placeholder xs={4} className="mb-2" />
            </Placeholder>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LoadingBlog;
