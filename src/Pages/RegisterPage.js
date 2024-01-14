import React from 'react';
import RandomImageSelector from '../Components/RandomImageSelector';
import images from '../Data/imageData';
import RegisterCard from '../Components/RegisterCard';
import '../Style/registerPage.css';

function RegisterPage() {
  return (
    <>
      <div style={{position:"relative"}}>
        <RandomImageSelector imageArray={images} />
        <RegisterCard />
      </div>
    </>
  );
}

export default RegisterPage;
