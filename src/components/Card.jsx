// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
/*na domačem zaslonu, storitve*/
const Card = ({ image, name, description, povezava }) => {
  return (
    <Link to={povezava} >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[400px] transform transition-transform duration-300 ease-in-out group hover:scale-105"> {/* kako izgleda kartica */}
        <img src={image} alt={name} className="w-full h-48 object-cover" /> {/* postravitev slike*/}
        <div className="p-4"> {/* razmak, padding*/}
          <h3 className="text-lg font-semibold">{name}</h3> {/* ime storitve */}
          <p className="text-gray-600 mt-2">{description}</p> {/* opis storitve */}
        </div>
      </div>
    </Link> /* link na podroben opis */
  );
};

export default Card;

