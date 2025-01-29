import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rose-200 text-black py-8">  {/*backgroung, padding navpičen*/}
      <div className="max-w-screen-xl mx-auto px-8"> {/*največjo širino elementa glede na širino zaslona-privzeto je 1280px, horizontalni margin (margin-left in margin-right)-samodejno,  prostor med vsebino elementa in njegovimi robovi, lepši izgled, elementi se ne prekirvajo*/}
        <div className="flex justify-center "> {/*center*/}
          {/*Kontakt*/}
          <div className='text-center mr-[64px]'>
            <h3 className="text-[25px] font-semibold mb-2">Kontakt</h3>
            <p className="mt-[8px] text-sm">Telefonska številka </p>
            <p className='font-serif text-[12px]'>070-555-493</p>
            <p className="mt-[8px] text-sm">Email</p>
            <p className='font-serif text-[12px]'>lepotnistudio.fres@gmail.com</p>
          </div>

          {/*Delovni čas*/}
          <div className="text-center mr-[64px]">
            <h3 className="text-[25px] font-semibold mb-2">Delovni čas</h3>
            <p className="text-sm">Po dogovoru</p>
          </div>

          {/*Lokacija*/}
          <div className="text-center mr-[64px]">
            <h3 className="text-[25px] font-semibold mb-2">Lokacija</h3>
            <p className="text-sm">Ulica borcev 1c</p>
            <p className="text-sm">2000 Maribor</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
