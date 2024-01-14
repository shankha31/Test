import React from 'react';

const SurplusFoodCard = (props) => {
  const {
    image,
    foodName,
    quantityLeft,
    postingTime,
    offerPrice,
    lastTimeToGrab,
  } = props;

  return (
    <div
      style={{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        maxWidth: '300px',
      }}
    >
      <img
        src={image}
        alt={foodName}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />

      <h3 style={{ marginTop: '8px', marginBottom: '8px' , fontWeight:'700', color:'#EEC759'}}>{foodName}</h3>

      <p>
        <strong>Quantity Left </strong> {quantityLeft}
      </p>

      <p>
        <strong>Posting Time </strong> {postingTime}
      </p>

      <p>
        <strong>Offer Price </strong> ₹{offerPrice}
      </p>

      <p>
        <strong>Last Time to Grab </strong> {lastTimeToGrab}
      </p>
    </div>
  );
};

export default SurplusFoodCard;
