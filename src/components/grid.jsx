// ProductGrid.js
import React from 'react';
import Card from './Card';
import manikura from '../assets/manikura.png'
import e_pedikura from '../assets/e_pedikura.png'
import m_pedikura from '../assets/m_pedikura.png'
import brow_lami from '../assets/brow_lami.png'

{/*na DOOMOV*/}
const products = [
  { id: 1, name: 'Manikura', description: 'V lepotnem studiu Freš ponujamo profesionalno manikuro, ki vključuje nego, oblikovanje in lakiranje nohtov, ter nego povrhnjice, da bodo vaše roke videti negovane in lepe.',  image: manikura, povezava:'/storitev/1' },
  { id: 2, name: 'Estetska pedikura', description: 'V lepotnem studiu Freš ponujamo estetsko pedikuro, ki vključuje nego stopal, oblikovanje nohtov, nego povrhnjice in sproščujočo masažo, da bodo vaša stopala lepa in negovana',  image: e_pedikura, povezava:'/storitev/2' },
  { id: 3, name: 'Medicinska pedikura', description: 'V našem studiu Freš izvajamo medicinsko pedikuro, ki rešuje težave s stopali, kot so otiščanci, kurja očesa in vraščeni nohti, ter zagotavlja zdravje in udobje vaših stopal.', image: m_pedikura, povezava:'/storitev/3' },
  { id: 4, name: 'Laminacija obrvi', description: 'V studiu Freš ponujamo laminacijo obrvi, ki vašim obrvem daje popoln videz z naravno polnostjo, obliko in dolgotrajno urejenostjo.', image: brow_lami, povezava:'/storitev/4' },
];
{/*razporeditev*/}
const ProductGrid = () => {
  return (
    <div className="flex justify-center mx-auto px-4 py-10 "> {/*pozicija*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-content-center"> {/*dve karti zgoraj, dve spodaj*/}
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            povezava={product.povezava}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
