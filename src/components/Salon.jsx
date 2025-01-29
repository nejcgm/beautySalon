import React, { useState, useEffect } from 'react';
import salon from '../assets/salon.png';
import salon1 from '../assets/salon1.png';
import salon2 from '../assets/salon2.png';
import salon3 from '../assets/salon3.png';
import salon4 from '../assets/salon4.png';
import salon5 from '../assets/salon5.png';
import salon6 from '../assets/salon6.png';
import salon7 from '../assets/salon7.png';
import salon8 from '../assets/salon8.png';
import salon9 from '../assets/salon9.png';
import salon10 from '../assets/salon10.png';
import salon11 from '../assets/salon11.png';
import salon12 from '../assets/salon12.png';
import salon13 from '../assets/salon13.png';
import salon14 from '../assets/salon14.png';
import barve from '../assets/barve.png';

/* slike na zaslonu */
const Salon = () => {
  const images = [salon, salon1, salon2, salon3, salon4, salon5, salon6, salon7, barve, salon8, salon9, salon10, salon11, salon12, salon13, salon14];
  const totalImages = images.length/2;
  const totalImagesModal = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
/* greš nazaj*/
  const showPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
/* greš naprej */
  const showNextImage = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
/* modalno okno */
  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };
/* modalno okno zapreš */
  const closeModal = () => {
    setIsModalOpen(false);
  };
/* modalno okno nazaj */
  const showPrevInModal = () => {
    if (modalIndex > 0) {
      setModalIndex((prevIndex) => prevIndex - 1);
    }
  };
/* modalno okno naprej*/
  const showNextInModal = () => {
    if (modalIndex < totalImagesModal - 1) {
      setModalIndex((prevIndex) => prevIndex + 1);
    }
  };
/* modalno okno - tipkovnica*/
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      showPrevInModal();
    } else if (e.key === 'ArrowRight') {
      showNextInModal();
    }
  };
/* modalno okno prehod*/
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="max-w-[1024px] mx-auto relative">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`, /* prehod */
            gap: '16px', /* razmak */
          }}
        >
          {images.map((image, index) => (
            <div
              key={index} /* odprtje modal */
              className="w-1/4 flex-shrink-0 cursor-pointer" 
              onClick={() => openModal(index)}
            >
              <img /* slika na zaslonu*/
                src={image}
                alt={`Slika ${index + 1}`}
                className="w-full h-auto rounded shadow-md object-cover"
              />
            </div>
          ))}
        </div>
            
        {currentIndex > 0 && (
          <button /* puščica levo*/
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white px-1 text-4xl bg-opacity-50 rounded-full" /* kako izgleda */
            onClick={showPrevImage}
          >
            &#8592;
          </button>
        )}

        {currentIndex < totalImages - 1 && (
          <button /* puščica desno */
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-white px-1 text-4xl bg-opacity-50 rounded-full" /* kako izgleda */
            onClick={showNextImage}
          >
            &#8594;
          </button>
        )}
      </div>

      {isModalOpen && ( /* modal window */
  <div className="fixed inset-0 flex justify-center items-center">
    {/* Background overlay */}
    <div className="bg-gray-900 bg-opacity-75 fixed inset-0 z-10"></div>

    {/* Modal content */}
    <div className="relative z-20">
      <img
        src={images[modalIndex]} /* image in the modal window */
        alt={`Modal Image ${modalIndex + 1}`}
        className="max-w-[90%] max-h-[80vh] object-contain mx-auto"
      />

      {/* Left arrow */}
      {modalIndex > 0 && (
        <button
          onClick={showPrevInModal}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 text-black text-5xl z-30"
        >
          &#8592;
        </button>
      )}

      {/* Right arrow */}
      {modalIndex < totalImagesModal - 1 && (
        <button
          onClick={showNextInModal}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 text-black text-5xl z-30"
        >
          &#8594;
        </button>
      )}

      {/* Close button */}
      <button
        onClick={closeModal}
        className="fixed top-4 right-4 text-black text-5xl z-30"
      >
        &times;
      </button>
    </div>
  </div>
)}




    </div>
  );
};

export default Salon;
