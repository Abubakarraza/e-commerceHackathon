import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
import logo from '../../assests/logo2.jpg';

import { NavLink, useNavigate } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../slices/user/UserSlice';

export default function NavbarComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useState('');
  const quantity = useSelector((state) => state.cart.carts);
  const login = useSelector((state) => state.user.login);
  const name = useSelector((state) => state.user.userDetail.name);
  const admin = useSelector((state) => state.user.userDetail.isAdmin);
  console.log(login);
  console.log(quantity.length);
  const onClickLogoutHandler = () => {
    alert('Are you sure you want to logout');
    dispatch(logoutUser()).then(() => window.location.reload(false));
  };
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : `/search`);
  };
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`api/product/category`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const res = await response.json();
        setCategory(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <>
      <MDBNavbar light bgColor="dark">
        <MDBContainer>
          <MDBNavbarBrand>
            <NavLink to="/">
              <img src={logo} height="50" alt="raza" loading="lazy" />
            </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarItem style={{ paddingBottom: '12px' }}>
            <div className="input-group">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={onSearchHandler}
              >
                <AiOutlineSearch />
              </button>
            </div>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <NavLink to={'/cart'}>
              <BsFillCartFill
                style={{ color: 'white', width: '30px', height: '30px' }}
              />
            </NavLink>
            {quantity.length > 0 && (
              <Badge pill bg="danger">
                {quantity.length}
              </Badge>
            )}
            <div className="btn-group" style={{ marginLeft: '20px' }}>
              <button type="button" className="btn btn-danger">
                Category
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu" style={{ marginTop: '30px' }}>
                {/* <div onClick={onClickHandler} className="dropdown-item btn">
                  logout
                </div> */}
                {category.map((item) => (
                  <div key={item} className="dropdown-item btn">
                    <NavLink
                      style={{ textDecoration: 'none' }}
                      to={`/search?category=${item}`}
                    >
                      {' '}
                      {item}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
            <div className="btn-group" style={{ marginLeft: '20px' }}>
              <button type="button" className="btn btn-danger">
                {login ? name : <span>Action</span>}
              </button>
              <button
                type="button"
                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu" style={{ marginTop: '30px' }}>
                {login ? (
                  <>
                    <NavLink className="dropdown-item" to={'/dashboard'}>
                      Create Product
                    </NavLink>
                    <NavLink className="dropdown-item" to={'/profile'}>
                      Profile
                    </NavLink>
                    <NavLink className="dropdown-item" to={'/contact'}>
                      Contact Us
                    </NavLink>
                    <div
                      onClick={onClickLogoutHandler}
                      className="dropdown-item btn"
                    >
                      logout
                    </div>
                  </>
                ) : (
                  <div>
                    <NavLink className="dropdown-item" to={'/signin'}>
                      Sign In
                    </NavLink>
                    <NavLink className="dropdown-item" to={'/signup'}>
                      Sign Up
                    </NavLink>
                    <NavLink className="dropdown-item" to={'/contact'}>
                      Contact Us
                    </NavLink>{' '}
                  </div>
                )}
                {/* {login && (
                  <div>
                   
                    <NavDropdown title="Post" id="admin-nav-dropdown">
                      <NavDropdown.Item>
                        <NavLink to="/dashboard"> Create Product</NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                )} */}
              </div>
            </div>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
