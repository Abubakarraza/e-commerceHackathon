import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import p1 from '../../assests/pic1.jpg';
import Rating from '../rating/Rating';

const Card = (props) => {
  return (
    <>
      <section>
        <div>
          <div className="card mx-auto col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale ">
              <div
                className=" btn btnBorder "
                style={{
                  borderRadius: '0',
                  width: 'fit-content',
                  backgroundColor: '#69f0ae',
                  boxShadow: '0px 10px 10px #e0e0e0',
                  zIndex: 1,
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '900',
                }}
              >
                {' '}
                SALE {props.sale}%
              </div>
            </div>
            <Link to={`/product/${props._id}`}>
              <img
                className="mx-auto img-thumbnail "
                src={props.imageUrl}
                alt="something is wrong"
                width="auto"
                height="auto"
              />
            </Link>
            <div className="card-body  text-center text-centers mx-auto">
              <h5 className="card-title ">{props.name}</h5>
              <p className="card-text ">$ {props.price}</p>
              <Rating rating={props.rating} numReview={props.numReview} />
            </div>
            <p style={{ textAlign: 'center' }}>{props.title} </p>

            {/* <button className="btn btn-danger m-2">Add to cart</button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
