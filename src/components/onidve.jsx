import React from 'react';

const Onidve = ({ image, name, description }) => {
  return (
    <div className="bg-white overflow-hidden w-full max-w-sm mx-auto mb-4"> 
      {/* Okvir s senco, centrirano in omejeno širino */}
      
      {/* Slika */}
      <div className="flex justify-center mt-6">
        <img 
          src={image} 
          alt={name} 
          className="w-[200px] h-[200px] object-cover rounded-full" 
        />
      </div>

      {/* Vsebina (Ime in Opis) */}
      <div className="p-6 text-center">
        <h3 className="font-serif text-[28px] font-semibold text-gray-800 mb-2">
          {name}
        </h3>
        <p className="font-serif text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Onidve;
