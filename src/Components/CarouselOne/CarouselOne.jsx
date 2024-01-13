import React, { useState } from 'react';
import "./CarouselOne.css";
import{IoIosArrowForward,IoIosArrowBack} from "react-icons/io";


const CarouselOne = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { url: 'https://partner.inloya.com/files/shop/slider/JAVVP9VZ4O52L6252N2CS7RK9409GPT0.jpg', text: "Loyalty Program" },
    { url: 'https://partner.inloya.com/files/shop/slider/06I864O4BLOCRK8APDKM3H6Z9I17D9D6.jpg', text: "Flower Subscription" }
];

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} id='left-btn'><IoIosArrowBack/></button>
      <div>
                <span id='carousel-text'>{images[currentImageIndex].text}</span>
                <img src={images[currentImageIndex].url} alt={images[currentImageIndex].text}/>
                <a href="#"><button id='carousel-btn'>Shop Now</button></a>
    </div>
      <button onClick={nextSlide} id='right-btn'><IoIosArrowForward/></button>
    </div>
  );
};


export default CarouselOne;