import React, { useState } from 'react';
import { useSurplusFood } from '../Context/SurplusFoodContext';
import ClearIcon from '@mui/icons-material/Clear';

const RestaurentCheckoutPage = ({ setCheckoutOpen }) => {

  const { surplusFoodItems, removeSurplusFoodItem } = useSurplusFood();

  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  const handleRemoveItem = (item) => {
    removeSurplusFoodItem(item.itemId);
    console.log(item.itemId, surplusFoodItems);
  };

  const handleCheckout = async (e) => {
    if (surplusFoodItems?.length > 0) {
      console.log('checkout');

      e.preventDefault();

      try {
        const response = await fetch('your-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(surplusFoodItems),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-md z-10 h-2/4 w-3/5" style={{ textAlign: 'left' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Surplus Items</h2>
        <ul style={{ height: '20rem', padding: '1rem 0.3rem', overflow: 'scroll', borderRadius: '5px' }}>
          {surplusFoodItems.map((item) => (
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '5px', padding: '0.5rem', marginBottom: '0.5rem', position: 'relative' }}>
              <li style={{ fontWeight: 'bolder', fontSize: '18px' }}>{item.itemName}</li>
              <li style={{ display: 'inline-block', marginLeft: '15px' }}><strong>Quantity - </strong>{item.quantity}</li>
              <li style={{ display: 'inline-block', marginLeft: '15px' }}><strong>Available Till - </strong>{item.lastTime}</li>
              <li style={{ display: 'inline-block', marginLeft: '15px' }}><strong> Offer Price -</strong>{Math.round(item.itemActualPrice - item.itemActualPrice * (item.discount / 100))}</li>
              <button style={{ background: '#BF3131', color: 'white', borderRadius: '3px', position: 'absolute', top: '20px', right: '15px' }} onClick={() => handleRemoveItem(item)}><ClearIcon /></button>
            </div>
          ))}
        </ul>

        <div className="flex justify-end">
          <button onClick={closeCheckout} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">
            Cancel
          </button>
          <button type='submit' onClick={(e) => handleCheckout(e)} className="px-4 py-2 bg-red-600 text-white rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCheckoutPage;