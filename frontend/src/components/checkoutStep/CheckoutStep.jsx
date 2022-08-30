import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './checkoutStep.css';

const CheckoutStep = (props) => {
  return (
    <div>
      <Container>
        <Row className="checkout-steps">
          <Col className={props.step1 ? 'active' : ''}>Sign-In</Col>
          <Col className={props.step2 ? 'active' : ''}>Shipping</Col>
          <Col className={props.step3 ? 'active' : ''}>Payment</Col>
          <Col className={props.step4 ? 'active' : ''}>Place Order</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutStep;
