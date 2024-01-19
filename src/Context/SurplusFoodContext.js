import React, { createContext, useContext, useState } from 'react';

const SurplusFoodContext = createContext();

export const useSurplusFood = () => {
  return useContext(SurplusFoodContext);
};

export const SurplusFoodProvider = ({ children }) => {
  const [surplusFoodItems, setSurplusFoodItems] = useState([]);

  const addSurplusFoodItem = (formData) => {
    setSurplusFoodItems((prevItems) => [...prevItems, formData]);
  };

  const removeSurplusFoodItem = (itemId) => {
    setSurplusFoodItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
  };
  return (
    <SurplusFoodContext.Provider value={{ surplusFoodItems, addSurplusFoodItem,  removeSurplusFoodItem}}>
      {children}
    </SurplusFoodContext.Provider>
  );
};
