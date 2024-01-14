import React, { useState } from 'react';

const AddItmNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: {
      value: '',
      unit: 'piece', // default unit
    },
    image: null,
    rating: '',
    calories: '',
    restaurantName: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      quantity: {
        ...prevData.quantity,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setFormData({
        name: '',
        price: '',
        quantity: {
          value: '',
          unit: 'piece',
        },
        image: null,
        rating: '',
        calories: '',
        restaurantName: '',
      });  
    alert('Submited');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding:'25px',borderRadius:'5px',fontSize: '12px', color: '#B4B4B3'}}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px',borderBottom : '2px solid #EEC759' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Price
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px' ,borderBottom : '2px solid #EEC759'}}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Quantity
        <input
          type="number"
          name="value"
          value={formData.quantity.value}
          onChange={handleQuantityChange}
          style={{ width: '50%', padding: '8px', marginTop: '5px', marginRight: '10px',borderBottom : '2px solid #EEC759' }}
        />
        <select
          name="unit"
          value={formData.quantity.unit}
          onChange={handleQuantityChange}
          style={{ width: '48%', padding: '8px', marginTop: '5px',borderBottom : '2px solid #EEC759' }}
        >
          <option value="piece">Piece</option>
          <option value="gram">Gram</option>
        </select>
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Image
        <input
          type="file"
          name="image"
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Rating
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px',borderBottom : '2px solid #EEC759' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Calories
        <input
          type="text"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px',borderBottom : '2px solid #EEC759' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Restaurant Name
        <input
          type="text"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px',borderBottom : '2px solid #EEC759' }}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: '#BF3131',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width:'100%',
          marginTop: '20px',

        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddItmNew;
