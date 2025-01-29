import React from 'react';

const KontaktCard = () => {
  return (
    <div className="w-screen max-w-[1024px] mt-[64px] mb-[64px]">
      {/* Spodaj div se razširi čez celotno širino */}
      <div className="bg-white rounded-lg shadow-lg p-[32px] flex justify-between w-full">

        {/* Levi del z besedilom */}
        <div className="flex-1 mr-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4 uppercase">Kontakt</h2>

          <div className="mb-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Telefon:</span> 070-555-493
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Email:</span> lepotnistudio.fres@gmail.com
            </p>
          </div>

          <div className="mb-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Lokacija:</span> Ulica borcev 1c, 2000 Maribor
            </p>
          </div>
        </div>

        {/* Desni del z iframe */}
        <div className="w-[500px] h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.6009270620184!2d15.686163476525115!3d46.535798261305544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f774c736aa061%3A0x3912c26eb509b85d!2sUlica%20borcev%201%20c%2C%202000%20Maribor!5e0!3m2!1ssl!2ssi!4v1733173162369!5m2!1ssl!2ssi"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default KontaktCard;
