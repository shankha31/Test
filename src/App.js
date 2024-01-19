import React from 'react';
// import RestaurantDashboard from './Pages/RestaurantDashboard.js';
import {RestaurantMenu} from './Pages/RestaurantMenu.js';
import { SurplusFoodProvider } from './Context/SurplusFoodContext';
// import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
// import RegisterPage from './Pages/RegisterPage';
// import SignInPage from './Pages/SignInPage';
// import AddItmNew from './Components/AddItmNew';
// import SurplusFoodCard from './Components/SurPlusFoodCard';
// import foodData from './Data/SurplusFoodData';
function App() {
  return (
    <>
    <SurplusFoodProvider initialSurplusFood={[]}>
      {/* <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </Router> */}
      {/* <AddItmNew /> */}
      {/* <SurplusFoodCard {...foodData} /> */}
      {/* <OrderTable 
      data = {orderTableData}
    /> */}
      {/* <RestaurantDashboard /> */}
    <RestaurantMenu/>
    </SurplusFoodProvider>
    </>
  );
}

export default App;
