import React from 'react';
// import axios from 'axios';

const ImageComponent = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl != "" ? (
        <img src={imageUrl} alt="Fetched from DOM" />
      ) : (
        <p>No image found</p>
      )}
    </div>
  );
};

export default ImageComponent;
