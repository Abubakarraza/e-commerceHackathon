import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import MessageUi from '../message/MessageUi';
import { Navigate, NavLink } from 'react-router-dom';
import './cart.css';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import pic from '../../assests/pic1.jpg';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import {
  decrementQuantity,
  deleteCart,
  getCart,
  incrementQuantity,
} from '../../slices/cart/CartSlice';
const CartScreen = () => {
  let data;

  const cart = useSelector((state) => state.cart.carts);
  const login = useSelector((state) => state.user.login);
  console.log(cart);
  data = useSelector((state) => state.products.product);
  //  console.log(cart);
  const dispatch = useDispatch();
  const onClickHandler = async () => {
    // const itemFind = cart.find((item) => item._id === data._id);
    // if (itemFind) {
    //   const response = await fetch(`/api/product/id/${data._id}`, {
    //     method: 'get',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   const res = await response.json();
    //   if (itemFind.quantity >= res.countInStock) {
    //     window.alert('Sorry, Product is out of Stock');
    //   } else {
    //     dispatch(addToCart(data));
    //   }
    // } else {
    // dispatch(addToCart(data));
    // }
    // };
  };
  const incrementHandler = (_id) => {
    const itemFind = cart.find((item) => item._id === _id);
    if (itemFind) {
      if (itemFind.quantity >= data.countInStock) {
        window.alert('Sorry, Product is out of Stock');
      } else {
        dispatch(incrementQuantity(_id)).then(() => dispatch(getCart()));
      }
    }
  };
  const decrementHandler = (_id) => {
    dispatch(decrementQuantity(_id)).then(() => dispatch(getCart()));
  };
  useEffect(() => {
    if (!login) {
      //Navigate('/signin');
    }
    dispatch(getCart());
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>

      <div className="row ">
        <div className="col-12">
          {cart.length === 0 ? (
            <MessageUi>
              Cart is empty <NavLink to="/">Go to Shopping</NavLink>
            </MessageUi>
          ) : (
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                  {/* <th scope="col">Total</th> */}
                </tr>
              </thead>
              {cart.map((item) => (
                <tbody key={item._id}>
                  <tr>
                    <td className="w-25 align-item-center justify-content-center ">
                      <img
                        src={item.imageUrl}
                        className="img-fluid img-thumbnail "
                        alt="Sheep"
                        style={{ height: '80px' }}
                      />
                    </td>
                    <td>
                      {' '}
                      <button
                        onClick={() => decrementHandler(item._id)}
                        disabled={item.quantity === 1}
                        className="btn btnn btn-danger "
                      >
                        <AiFillMinusCircle
                          className="btn-danger"
                          style={{
                            height: '20px',
                            width: '20px',
                          }}
                        />
                      </button>{' '}
                      <span style={{ textAlign: 'center' }}>
                        {item.quantity}
                      </span>{' '}
                      <button
                        onClick={() => incrementHandler(item._id)}
                        disabled={item.quantity === item.countInStock}
                        className="btn btnn btn-success"
                      >
                        <AiFillPlusCircle
                          style={{ height: '20px', width: '20px' }}
                        />
                      </button>{' '}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteCart(item._id))}
                      >
                        <MdDelete style={{ height: '25px', width: '25px' }} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      </div>
      <Row>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h5>Items:</h5>
                  </Col>
                  <Col>
                    <h5>{cart.reduce((a, c) => a + c.quantity, 0)}</h5>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h5>SubTotal:</h5>
                  </Col>
                  <Col>
                    <h5>
                      Rs:{cart.reduce((a, c) => a + c.price * c.quantity, 0)}
                    </h5>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="warning"
                    className="hovers"
                    style={{
                      borderWidth: '1px',
                      borderColor: 'white',
                    }}
                    disable={cart.length === 0}
                  >
                    <span style={{ color: 'whitesmoke' }}>
                      <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={'/shipping'}
                      >
                        {' '}
                        Proceed to Checkout
                      </NavLink>
                    </span>
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CartScreen;
