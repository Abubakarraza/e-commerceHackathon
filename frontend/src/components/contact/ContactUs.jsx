import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BsEnvelopeFill,
  BsCalculatorFill,
  BsFillPersonFill,
  BsFillHouseDoorFill,
} from 'react-icons/bs';
import { getUser } from '../../slices/user/UserSlice';
export default function ContactUs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetail);

  const login = useSelector((state) => state.user.login);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(getUser());
    if (login) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, []);

  const onHandler = async (e) => {
    try {
      if (!login) {
        navigate('/login');
      }
      // const { name, email, phone, message } = userData;
      e.preventDefault();
      const res = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (data) {
        window.alert('message is successfully send');
        // setUserData({ ...userData, message: "" });
      }
    } catch (error) {
      console.log(error);
      // navigate("/login")
    }
  };
  return (
    <>
      <div style={{ marginTop: '20px' }} className="container">
        {/* <div className="row">
                    <div className="col-12" > */}

        <div
          className="row justify-content-between "
          style={{ justifyContent: 'center' }}
        >
          <div
            className="col-lg-4 col-sm-6 col-12 "
            style={{
              background: '#F8F9F9 ',
              borderRadius: '6px',
              margin: '12px',
            }}
          >
            <div className="row">
              <div className="col-2">
                <BsFillPersonFill
                  style={{
                    marginTop: '12px',
                    color: '#2980B9',
                    height: '20px',
                    width: '20px',
                  }}
                />
              </div>
              <div
                className="col-10"
                style={{ justifyContent: 'flex-start', padding: '5px' }}
              >
                <h6>Name</h6>
                <span>M Abubakar Raza</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12"
            style={{
              background: '#F8F9F9 ',
              borderRadius: '6px',
              margin: '12px',
            }}
          >
            <div className="row">
              <div className="col-2">
                <BsEnvelopeFill
                  style={{
                    marginTop: '12px',
                    color: '#2980B9',
                    height: '20px',
                    width: '20px',
                  }}
                />
              </div>
              <div
                className="col-10"
                style={{ justifyContent: 'flex-start', padding: '5px' }}
              >
                <h6>E-mail</h6>
                <span>abubakarraza64@gmail.com</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12"
            style={{
              background: '#F8F9F9 ',
              borderRadius: '6px',
              margin: '12px',
            }}
          >
            <div className="row">
              <div className="col-2">
                <BsFillHouseDoorFill
                  style={{
                    marginTop: '12px',
                    color: '#2980B9',
                    height: '20px',
                    width: '20px',
                  }}
                />
              </div>
              <div
                className="col-10"
                style={{ justifyContent: 'flex-start', padding: '5px' }}
              >
                <h6>Address</h6>
                <span>Sir Syed Town Faisalabad</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12"
            style={{
              background: '#F8F9F9 ',
              borderRadius: '6px',
              margin: '12px',
            }}
          >
            <div className="row">
              <div className="col-2">
                <BsCalculatorFill
                  style={{
                    marginTop: '12px',
                    color: '#2980B9',
                    height: '20px',
                    width: '20px',
                  }}
                />
              </div>
              <div
                className="col-10"
                style={{ justifyContent: 'flex-start', padding: '5px' }}
              >
                <h6>phone</h6>
                <span>+92 321-7805899</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border " style={{ marginTop: '30px' }}>
        <form action="">
          <div className="row ">
            <div
              style={{ textAlign: 'center', marginTop: '30px' }}
              className="col-12"
            >
              <h3>Get in Touch</h3>
            </div>
          </div>

          <div
            className="row"
            style={{ padding: '20px', justifyContent: 'center' }}
          >
            <div className="col-lg-4 col-md-6 col-12">
              <div class="form-outline">
                <input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="typeName"
                  style={{ marginTop: '12px' }}
                  className="form-control"
                  placeholder="Enter Name"
                  required
                />
                {/* <label class="form-label" for="typeEmail">Email input</label> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="form-outline">
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="typeEmail"
                  style={{ marginTop: '12px' }}
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
                {/* <label class="form-label" for="typeEmail">Email input</label> */}
              </div>
            </div>
            <div className="col-lg-4 col-12 col-md-6 ">
              <div className="form-outline">
                <input
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="number"
                  style={{ marginTop: '12px' }}
                  id="typeNumber"
                  className="form-control"
                  placeholder="Enter phone no"
                  required
                />
                {/* <label class="form-label" for="typeEmail">Email input</label> */}
              </div>
            </div>
          </div>
          <div className="row">
            <form method="POST">
              <div class="form-outline mb-4">
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                  placeholder="Enter Your Message Here"
                  required
                ></textarea>
                <label class="form-label" for="form4Example3"></label>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-block mb-4"
                onClick={onHandler}
              >
                Send Message
              </button>
            </form>
          </div>
        </form>
      </div>
    </>
  );
}
