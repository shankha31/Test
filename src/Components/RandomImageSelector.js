import React, { useState, useEffect } from 'react';
import '../Style/RandomImageSelector.css';

const RandomImageSelector = ({ imageArray }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    selectRandomImage();
  }, []);

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    setSelectedImage(imageArray[randomIndex]);
  };

  return (
    <div className="random-image-selector">
      {selectedImage && (
        <img className='imageItm' src={selectedImage} alt="Random" onClick={selectRandomImage} />
      )}
    </div>
  );
};

export default RandomImageSelector;