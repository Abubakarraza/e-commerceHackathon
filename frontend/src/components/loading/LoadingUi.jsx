import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const LoadingUi = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Spinner
        style={{
          position: 'absolute',
          top: '50%',
          left: '45%',
          height: '100px',
          width: '100px',
        }}
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading ....</span>
      </Spinner>
    </div>
  );
};

export default LoadingUi;
