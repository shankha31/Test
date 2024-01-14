import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import "../Style/registerPage.css"
import 'react-phone-number-input/style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterCard = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="register-page">
      <h3 className='haderTxtReg'>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label' htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            className='inpBox'
            value={firstName}
            onChange={handleFirstNameChange}
            style={{textTransform:"uppercase"}}
            required
          />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            className='inpBox'
            value={lastName}
            style={{textTransform:"uppercase"}}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className='inpBox'
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="phone-number">Phone Number</label>
          <PhoneInput
            id="phone-number"
            placeholder="Enter phone number"
            className='inpBox'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            defaultCountry="IN"
            required
          />
        </div>
        
        <div className="form-group">
          <label className='label' htmlFor="password"> Password </label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className='inpBox'
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="password-toggle"
            >
              {showPassword ? <VisibilityIcon fontSize='small'/> : <VisibilityOffIcon fontSize='small'/>}
            </button>
          </div>
        </div>

        <button className='registerBtn' type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCard;
