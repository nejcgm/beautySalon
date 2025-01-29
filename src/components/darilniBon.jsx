import React from 'react';
import bon from '../assets/bon.png';

const DarilniBon = () => {
  return (
    <div className='bg-white rounded-xl mb-[32px] p-[32px] shadow-lg w-full max-w-screen-lg mx-auto'> {/* Popravljena širina, dodan rob m-[32px] */}
      <div className="overflow-hidden w-full mb-6"> {/* širina 100% */}
        <h2 className="text-[35px] font-bold text-left text-gray-800 uppercase">Darilni bon</h2> {/* Naslov */}
      </div>

      <div className="mb-6">
        <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify">
          Podarite svojim najdražjim popolno darilo – darilni bon lepotnega studia FREŠ.
        </p>
        <p className="text-xl font-serif mb-4 mt-4 text-lg text-gray-700 text-justify">
          Izbirate lahko med vrhunskimi storitvami, kot so manikura, estetska pedikura, medicinska pedikura in laminacija obrvi.
        </p>
        <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify">
          Darilni boni so na voljo v različnih vrednostih in jih lahko prilagodimo vašim željam. Naročite jih osebno v našem salonu, preko telefonskega klica na 070-555-493 ali nam pišite na lepotnistudio.fres@gmail.com.
        </p>
        <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify">
          Poskrbite za razvajanje in lepoto – darilo, ki vedno navduši.
        </p>

        <div className="flex items-center justify-center">
          <img
            className="w-[650px] h-[350px] object-center rounded"
            src={bon}
            alt="Darilni bon"
          />
        </div>

        <p className="text-xl font-serif mb-4 mt-4 text-lg text-gray-700 text-justify">
          Za vse dodatne informacije in vprašanja smo vam zmeraj na voljo.
        </p>
      </div>
    </div>
  );
};

export default DarilniBon;
