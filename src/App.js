import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage';
import AddItmNew from './Components/AddItmNew';
import SurplusFoodCard from './Components/SurPlusFoodCard';
import foodData from './Data/SurplusFoodData';
function App() {
  return (
    <>
     {/* <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </Router> */}
    {/* <AddItmNew /> */}
    <SurplusFoodCard {...foodData} />
    </>
  );
}

export default App;
