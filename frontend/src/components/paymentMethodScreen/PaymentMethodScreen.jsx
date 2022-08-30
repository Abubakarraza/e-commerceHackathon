import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CheckoutStep from '../checkoutStep/CheckoutStep';
const PaymentMethodScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('paymentMethod', paymentMethod);
    console.log(localStorage.getItem('paymentMethod'));
  };
  return (
    <div className="container small-container">
      <CheckoutStep step1 step2></CheckoutStep>
      <h1 className="my-3">Payment Method</h1>
      <Form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Paypal"
            label="Paypal"
            value="Paypal"
            checked={paymentMethod === 'Paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethod === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </div>
        <div className="mb-3">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  );
};

export default PaymentMethodScreen;
