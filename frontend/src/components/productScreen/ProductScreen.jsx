import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../rating/Rating';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { getProduct } from '../../slices/product/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import {
  addToCart,
  getCart,
  incrementQuantity,
} from '../../slices/cart/CartSlice';
const ProductScreen = () => {
  let data;
  const dispatch = useDispatch();
  const param = useParams();
  const { _id } = param;
  console.log(_id, 'id');
  // const quantity = useSelector((state) => state.cart.carts);

  const cart = useSelector((state) => state.cart.carts);
  data = useSelector((state) => state.products.product);
  const { name, imageUrl, price } = data;
  console.log(data._id);
  useEffect(() => {
    dispatch(getProduct(_id));
  }, [_id]);
  const onClickHandler = async () => {
    dispatch(getCart());
    const itemFind = cart.find((item) => {
      return item._id === data._id;
    });
    if (itemFind) {
      if (itemFind.quantity >= data.countInStock) {
        window.alert('Sorry, Product is out of Stock');
      }
      dispatch(incrementQuantity(_id));
    }
    if (!itemFind) {
      dispatch(addToCart({ name, imageUrl, price }));
    }
  };
  return (
    <>
      <Helmet>
        <title>{data.name}</title>
      </Helmet>
      <Container className="mt-5">
        <Row>
          <Col md={6} className="m-auto">
            <img
              src={data.imageUrl}
              style={{ maxWidth: '100%', maxHeight: '800px' }}
              alt="pic here"
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>{data.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={data.rating} numReview={data.numReview} />
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: '30px' }}>
                <h5> Price : $ {data.price}</h5>
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: '20px' }}>
                <h5> Description :</h5>
                <div>{data.description}</div>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card style={{}} className="mt-5">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>price :</Col>
                      <Col>${data.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status :</Col>
                      <Col>
                        {data.countInStock > 0 ? (
                          <Badge bg="success">Available</Badge>
                        ) : (
                          <Badge bg="danger">UnAvailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Stock :</Col>
                      <Col>{data.countInStock}</Col>
                    </Row>
                  </ListGroup.Item>
                  {data.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <NavLink to="/cart">
                          <Button
                            onClick={onClickHandler}
                            style={{
                              borderWidth: '1px',
                              borderColor: 'white',
                              fontColor: 'white',
                            }}
                            className="hovers"
                            variant="warning"
                          >
                            <span style={{ color: 'white' }}>Add To Cart</span>
                            <BsFillCartPlusFill
                              style={{
                                width: '25px',
                                height: '25px',
                                color: 'white',
                              }}
                            />
                          </Button>
                        </NavLink>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
