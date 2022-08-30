import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const SearchScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchProduct = new URLSearchParams(search); // /search?category=Shirts
  const categorys = searchProduct.get('category') || 'all';
  const price = searchProduct.get('price') || 'all';
  const query = searchProduct.get('query') || 'all';
  const rating = searchProduct.get('rating') || 'all';
  const order = searchProduct.get('order') || 'newset';
  const page = searchProduct.get('page') || 1;
  const [data, setData] = useState('');
  const [category, setCategory] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/products/search?page=${page}&query=${query}&category=${category}&rating=${rating}&price=${price}&order=${order}`
      );
      const res = await response.json();
      setData(res);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [categorys, rating, order, price, page, query]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`/api/products/category`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setCategory(res);
    };
    fetchCategory();
  }, []);
  return <div></div>;
};

export default SearchScreen;
