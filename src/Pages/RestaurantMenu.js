import React, { useState } from 'react';
import SurplusFoodAddPopup from '../Components/SurplusFoodAddPopup';
import AddIcon from '@mui/icons-material/Add';
import menuData from '../Data/restaurantMenuData';
import '../Style/restaurantMenu.css'
import CartIcon from '../Components/CartIcon';
import { useSurplusFood } from '../Context/SurplusFoodContext';

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState(menuData);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { surplusFoodItems, addSurplusFoodItem } = useSurplusFood();

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsPopupOpen(true);
    };

    const handlePopupSubmit = (formData) => {
        console.log('Submitted Data:', formData);
        setIsPopupOpen(false);
        setSelectedItem(null);
        addSurplusFoodItem(formData);
    };

    return (
        <div className='restaurantMenu'>
            <h1 className="menuHadder">Restaurant Menu</h1>
            <CartIcon />
            <ul className='menuWrapper'>
                {menuItems.map((item) => (
                    <div>
                        <li className='menuItem' key={item.id} >
                            {item.name} - ₹{item.price}
                            <button className='button-3' onClick={() => handleItemClick(item)}><AddIcon /></button>
                        </li>
                    </div>
                ))}
            </ul>

            {isPopupOpen && selectedItem && (
                <SurplusFoodAddPopup
                    selectedItem={selectedItem}
                    onSubmit={handlePopupSubmit}
                    setIsPopupOpen = {setIsPopupOpen}
                    setSelectedItem = {setSelectedItem}
                />
            )}
        </div>
    );
};

export {RestaurantMenu};