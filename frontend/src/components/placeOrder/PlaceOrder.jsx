import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import CheckoutStep from '../checkoutStep/CheckoutStep';
import MessageUi from '../message/MessageUi';
import pic from '../../assests/pic1.jpg';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  return (
    <Container>
      <CheckoutStep step1 step2 step3></CheckoutStep>
      <h1>Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body className="mb-3">
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong>
                {}d <br />
                <strong>Address:</strong>
                {}Address,{}city,{}postalCode,{}country
              </Card.Text>
              <Link to={'/shipping'}>Edit</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="mb-3">
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <strong>Method:</strong>
                {}PayPal
              </Card.Text>
              <Link to={'/shipping'}>Edit</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="mb-3">
              <Card.Title>Items</Card.Title>
              <ListGroup>
                {cart.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img className="img-fluid rounded img-thumbnail"></img>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>
                        <span> $:{item.price}</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
