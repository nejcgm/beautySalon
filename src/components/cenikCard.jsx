import React from 'react';

const CenikCard = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen">  {/* če daš to ven, se cenik razpotegne - meja*/}
      <div className="bg-white rounded-lg shadow-lg p-[32px] w-screen max-w-[1024px] mt-4 mb-4"> {/* cenik je na beli podlagi*/}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Nohti</h2>  {/* leva stran naslov*/}
        <table className="w-full text-left text-gray-700">
          <tbody>
            <tr>
              <td className="py-2"> {/*navpični odmik znotraj elementa (padding-y)*/}
                <div className="font-serif text-xl flex items-baseline">
                  <span>Podaljševanje nohtov z gelom</span> {/* leva stran storitev*/}
                  <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span> {/* črtkana črta med storitvijo in ceno*/}
                  <span className="text-right">35 €</span> {/* desna stran cena*/}
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2"> 
                <div className="font-serif text-xl flex items-baseline">
                  <span>Korektura geliranih nohtov</span>
                  <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                  <span className="text-right">30 €</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <div className="font-serif text-xl flex items-baseline">
                  <span>Odstranjevanje gela</span>
                  <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                  <span className="text-right">10 €</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <div className="font-serif text-xl flex items-baseline">
                  <span>BIAB</span>
                  <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                  <span className="text-right">30 €</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Obrvi</h2>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Laminacija obrvi</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">35 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Laminacija z barvanjem</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">40 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Oblikovanje obrvi</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">15 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Barvanje obrvi</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">10 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Oblikovanje in barvanje obrvi</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">20 €</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Pedikura</h2>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Estetska pedikura</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">40 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Medicinska pedikura</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">55 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>SPA pedikura</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">50 €</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <div className="font-serif text-xl flex items-baseline">
                    <span>Geliranje nohtov na nogah</span>
                    <span className="flex-grow border-t border-dashed border-gray-400 mx-4"></span>
                    <span className="text-right">25 €</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CenikCard;
