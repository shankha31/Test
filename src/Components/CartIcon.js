import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurentCheckoutPage from './RestaurentCheckoutPage.js'

const CartIcon = ( ) => {

  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const openCheckout = () => {
    setCheckoutOpen(!isCheckoutOpen);
  };

  return (
    <div style={{ textAlign: 'end', marginRight: '5rem', marginBottom: '2rem' }} onClick={openCheckout}>
      <button>
        <ShoppingCartIcon fontSize='medium' style={{ color: '#BF3131' }} />
      </button>
      {isCheckoutOpen && <RestaurentCheckoutPage setCheckoutOpen={setCheckoutOpen}/>}
    </div>
  );
};

export default CartIcon;