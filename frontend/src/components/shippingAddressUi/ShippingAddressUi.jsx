import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CheckoutStep from '../checkoutStep/CheckoutStep';
import './shippingAddress.css';
const ShippingAddressUi = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      postalCode,
      country,
      city,
    };
    localStorage.setItem('shuippingAddress', JSON.stringify(data));
    // const datas = JSON.parse(localStorage.getItem('shuippingAddress'));
    // console.log(datas);
  };
  return (
    <div className="container">
      <CheckoutStep step1></CheckoutStep>
      <div className="row mt-3  ">
        <div className="col-md-3"></div>

        <div className="col-md-9 justify-content-center">
          <div className="card card-custom pb-4">
            <div className="card-body mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: '#495057' }}>Delivery Details</h4>
              </div>

              <form className="mb-0" onSubmit={onSubmitHandler}>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form9Example1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="form9Example1"
                        className="form-control input-custom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form9Example2">
                        Address
                      </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="form9Example2"
                        className="form-control input-custom"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form9Example3">
                        City
                      </label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        id="form9Example3"
                        className="form-control input-custom"
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form9Example4">
                        Postal Code
                      </label>
                      <input
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        id="form9Example4"
                        className="form-control input-custom"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form9Example6">
                        Country
                      </label>
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        id="form9Example6"
                        className="form-control input-custom"
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="typeEmail">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmail"
                        className="form-control input-custom"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="float-end ">
                  <button
                    type="submit"
                    style={{ backgroundColor: '#0062CC' }}
                    className="btn btn-primary btn-rounded"
                  >
                    <NavLink
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={'/paymentMethod'}
                    >
                      Place order
                    </NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressUi;
