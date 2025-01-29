import React from 'react';
import Onidve from './onidve';
import lea from '../assets/lea.png';
import alja1 from '../assets/alja1.png';

const Opis = () => {
  const people = [
    {
      id: 1,
      name: 'Lea Podgornik',
      description: 'Ustanoviteljica studia FREŠ, strokovnjakinja za nohtno estetiko, ki z ustvarjalnostjo in predanostjo skrbi za popoln videz nohtov.',
      image: lea,
    },
    {
      id: 2,
      name: 'Alja Podgornik',
      description: 'S svojo izkušenostjo poskrbi za čudovite nohte ter profesionalno laminacijo obrvi.',
      image: alja1,
    },
  ];

  return (
    <div>
      {/* Kontejner za vsebino */}
      <div className="container mx-auto p-6">
        {/* Beli okvir za opis */}
        <div className="bg-white rounded-xl mb-[32px] p-[32px] shadow-lg w-full max-w-screen-lg mx-auto">
          <div className="mb-6">
            <h2 className="text-[35px] font-bold text-left text-gray-800 uppercase">O nas</h2>
          </div>
          <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify w-full">
            Dobrodošli v FREŠ, lepotnem studiu, kjer se prepletata ljubezen do estetike in družinska povezanost! Naša zgodba sega v leto 2014. Prvotno se je studio imenoval LP oblikovanje nohtov. Leta 2022 pa je Lea Podgornik z željo po ustvarjanju prostora za vrhunske lepotne storitve ustanovila FREŠ. S svojim znanjem in strastjo do detajlov je hitro pridobila zaupanje številnih zadovoljnih strank.
          </p>
          <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify w-full">
            Leta 2023 se je Lei pridružila njena mlajša sestra Alja, ki je s svojo ustvarjalnostjo in predanostjo dodatno obogatila naše storitve. Skupaj sta ustvarili močan tandem, ki združuje izkušnje in svežino, ter se posvečata manikuri, pedikuri in laminaciji obrvi.
          </p>
          <p className="text-xl font-serif mb-4 text-lg text-gray-700 text-justify w-full">
            Pri FREŠ verjamemo v individualni pristop, kakovost in prijetno vzdušje, kjer se vsaka stranka počuti sproščeno in posebna. Hvaležni smo, da lahko s svojim delom prispevamo k vaši samozavesti in zadovoljstvu. Veselimo se, da vas razvajamo!
          </p>
        </div>

        {/* Naslov za ekipo */}
        <div className="mt-[100px] max-w-screen-lg mx-auto">
          <h2 className="text-[35px] font-bold text-left text-gray-800 uppercase">FREŠ ekipa</h2>
        </div>
      </div>

      {/* Grid ekipa */}
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-lg mx-auto rounded-xl mb-[100px] shadow-lg">
        {people.map((person) => (
          <Onidve
            key={person.id}
            image={person.image}
            name={person.name}
            description={person.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Opis;
