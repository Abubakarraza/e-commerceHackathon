import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assests/logo2.jpg';
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const loading = useSelector((state) => state.products.loading);
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="mt-5">
          <CDBFooter
            style={{ backgroundColor: 'black' }}
            className="shadow mt-5 "
          >
            <CDBBox
              display="flex"
              flex="column"
              className="mx-auto py-5"
              style={{ width: '90%' }}
            >
              <CDBBox
                display="flex"
                justifyContent="between"
                className="flex-wrap"
              >
                <CDBBox>
                  <NavLink
                    to={'/'}
                    className="d-flex align-items-center p-0 text-dark"
                  >
                    <img alt="logo" src={logo} width="50px" />
                    <span
                      className="ml-3 h5 font-weight-bold"
                      style={{ color: 'white' }}
                    >
                      E-Store
                    </span>
                  </NavLink>
                  <p
                    className="my-3"
                    style={{ width: '250px', color: 'white' }}
                  >
                    We are Providing best Services to our Client
                  </p>
                </CDBBox>
                <CDBBox>
                  <p
                    className="h5 mb-4"
                    style={{ fontWeight: '600', color: 'white' }}
                  >
                    E-Store
                  </p>
                  <CDBBox
                    flex="column"
                    display="flex"
                    style={{ cursor: 'pointer', padding: '0' }}
                  >
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/profile'}>Profile</NavLink>
                  </CDBBox>
                </CDBBox>
                <CDBBox>
                  <p
                    className="h5 mb-4"
                    style={{ fontWeight: '600', color: 'white' }}
                  >
                    Account
                  </p>
                  <CDBBox
                    display="flex"
                    flex="column"
                    style={{ cursor: 'pointer', padding: '0' }}
                  >
                    <NavLink to={'/signup'}>Sign Up</NavLink>

                    <NavLink to={'/signin'}>Sign In</NavLink>
                  </CDBBox>
                </CDBBox>
              </CDBBox>
              <CDBBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ width: '100%' }}
                className="mx-auto mt-4"
              >
                <small
                  className="text-center"
                  style={{ width: '50%', color: 'white' }}
                >
                  &copy; E-Store, 2022. All rights reserved.
                </small>
                <a
                  href="https://www.facebook.com/mabubakar.raza.3"
                  target={'_blank'}
                >
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                </a>
                <CDBBtn flat color="dark" className="mx-3 p-2">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
          </CDBFooter>
        </div>
      )}
    </>
  );
};
export default Footer;
