import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import "../Style/signInPage.css"
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';

const SignInCard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <div className="sign-in-page">
      <h3 className='haderTxtSignIn'>Already Members</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group-PhNo">
          <label className='label' htmlFor="phone-number">Phone Number</label>
          <PhoneInput
            id="phone-number"
            className='inpBox'
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            defaultCountry="IN" 
            inputStyle={{ width: '100%' }}
            required
          />
        </div>
        <div className="form-group-pass">
          <label htmlFor="password" className='label'>Password</label>
          <input
            type="password"
            id="password"
            className='inpBox'
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className='signInBtn' type="submit">Sign In</button>
      </form>
      <div className='notRegisteredBtn'>
      <Link to="/registration">Haven't Registered Yet</Link>
      </div>
    </div>
  );
};

export default SignInCard;
