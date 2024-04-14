
// import React, { useState, useEffect } from 'react';
// import './Slider.css';
// import image2 from './img2.jpg';
// import image1 from './img1.jpg'; // Import your images
// import image3 from './img3.jpg'; 
// import image4 from './img4.jpg';
// import { FaCircle } from 'react-icons/fa'; // Import circle icon from React Icons

// const Slider = () => {
//   const images = [image2, image1,image3,image4]; // List of imported images
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to navigate to the next slide automatically
//   const goToNextSlideAuto = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Function to navigate to the next slide manually
//   const goToNextSlideManual = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Function to navigate to the previous slide manually
//   const goToPrevSlideManual = () => {
//     const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Automatic transition interval (adjust as needed)
//   useEffect(() => {
//     const interval = setInterval(goToNextSlideAuto, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [currentImageIndex]); // Update interval when the currentImageIndex changes

//   return (
//     <div className="slider-container">
//       <div className="slider-frame">
//         <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
//         <div className="slider-dots">
//           {images.map((image, index) => (
//             <FaCircle
//               key={index}
//               className={`slider-dot ${currentImageIndex === index ? 'active' : ''}`}
//               onClick={() => setCurrentImageIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;


// import React, { useState, useEffect } from 'react';
// import './Slider.css';
// import image1 from './img1.jpg'; // Import your images
// import image2 from './img2.jpg';
// import image3 from './img3.jpg';
// import image4 from './img4.jpg';
// import { FaCircle } from 'react-icons/fa'; // Import circle icon from React Icons

// const Slider = () => {
//   const images = [image1, image2, image3, image4]; // List of imported images
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to navigate to the next slide automatically
//   const goToNextSlideAuto = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Function to navigate to the next slide manually
//   const goToNextSlideManual = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Function to navigate to the previous slide manually
//   const goToPrevSlideManual = () => {
//     const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   // Automatic transition interval (adjust as needed)
//   useEffect(() => {
//     const interval = setInterval(goToNextSlideAuto, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [currentImageIndex]); // Update interval when the currentImageIndex changes

//   return (
//     <div className="slider-container">
//       <div className="slider-frame">
//         <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
//         <div className="slider-dots">
//           {images.map((image, index) => (
//             <FaCircle
//               key={index}
//               className={`slider-dot ${currentImageIndex === index ? 'active' : ''}`}
//               onClick={() => setCurrentImageIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState, useEffect } from 'react';
import image1 from './img1.jpg'; // Import your images
import image2 from './img2.jpg';
import image3 from './img3.jpg';
import image4 from './img4.jpg';
import image5 from './img5.jpg';
import image6 from './img6.jpg';
import image7 from './img7.jpg';
import './Slider.css';

const Slider = () => {
  const images = [image1, image2, image3, image4,image5,image6,image7];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="navigation-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
