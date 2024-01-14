import React from 'react';
import RandomImageSelector from '../Components/RandomImageSelector';
import images from '../Data/imageData';
import '../Style/signInPage.css'
import SignInCard from '../Components/SignInCard';
function SignInPage() {
  return (
    <>
      <div style={{position:"relative"}}>
        <RandomImageSelector imageArray={images} />
        <SignInCard />
      </div>
    </>
  );
}

export default SignInPage;
