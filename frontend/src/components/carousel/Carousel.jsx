import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assests/pic1.jpg';
import pic2 from '../../assests/pic2.jpg';
import pic3 from '../../assests/pic3.jpg';
import pic4 from '../../assests/pic4.jpg';
import pic5 from '../../assests/pic5.jpg';
import pic6 from '../../assests/pic6.jpg';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: '600px' }}
          src={pic4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Furniture Set</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic5}
          alt="Second slide"
          style={{ maxHeight: '600px' }}
        />

        <Carousel.Caption>
          <h3>24 Open E-Store</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Third slide"
          style={{ maxHeight: '600px' }}
        />

        <Carousel.Caption>
          <h3>Accessories</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
