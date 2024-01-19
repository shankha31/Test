import React, { useState } from 'react';

const SurplusFoodAddPopup = ({ selectedItem, onSubmit, setIsPopupOpen, setSelectedItem }) => {
  const [quantity, setQuantity] = useState(0);
  const [lastTime, setLastTime] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [filled,setFilled] = useState('');

  const handleSubmit = (e) => {
    if (quantity !== 0 && discount !== 0 && lastTime !== null) {
      onSubmit({
        itemId: selectedItem.id,
        itemName : selectedItem.name,
        itemActualPrice : selectedItem.price,
        quantity,
        lastTime,
        discount,
      });
      handlePopupClose(e);
      setFilled('');
    } else {
      setFilled('*All Fields are required')
    }
  };

  const handlePopupClose = (e) => {
    setIsPopupOpen(false);
    setSelectedItem(null);
    setFilled('');
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setLastTime(newTime);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">{selectedItem?.name || 'Item Name Not Available'}</h2>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
          className="mb-2 p-2 border rounded-md w-full"
          required
        />

        <label htmlFor="timeInput">Select a time:</label>
        <input
          type="time"
          id="timeInput"
          name="timeInput"
          value={lastTime}
          onChange={handleTimeChange}
          className="mb-2 p-2 border rounded-md w-full"
          required
        />

        <label htmlFor="discount">Discount (%):</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={(e) => setDiscount(parseInt(e.target.value, 10) || 0)}
          className="mb-4 p-2 border rounded-md w-full"
          required
        />

        <div className="flex justify-end">
          <div style={{marginRight:'27rem',marginTop:'6px',color:'#BF3131'}}>{filled}</div>
          <button onClick={handlePopupClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">
            Cancel
          </button>
          <button type='submit' onClick={(e) => handleSubmit(e)} className="px-4 py-2 bg-red-600 text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurplusFoodAddPopup;