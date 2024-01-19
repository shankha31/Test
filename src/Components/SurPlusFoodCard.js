import React from 'react';

const SurplusFoodCard = ({ foodDataArray }) => {
  return (
    <>
      {foodDataArray?.map((foodData, index) => (
        <div
          key={index}
          style={{
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            minWidth: '300px',
            maxWidth:'300px',
            color: '#7F8487'
          }}
        >
          <img
            src={foodData.image}
            alt={foodData.foodName}
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />

          <h3 style={{ marginTop: '8px', marginBottom: '8px' , fontWeight:'bolder', color:'#FFC47E'}}>{foodData.foodName}</h3>

          <p>
            <strong>Quantity Left:</strong> {foodData.quantityLeft}
          </p>

          <p>
            <strong>Posting Time:</strong> {foodData.postingTime}
          </p>

          <p>
            <strong>Offer Price:</strong> ₹{foodData.offerPrice}
          </p>

          <p>
            <strong>Last Time to Grab:</strong> {foodData.lastTimeToGrab}
          </p>
        </div>
      ))}
    </>
  );
};

export default SurplusFoodCard;
