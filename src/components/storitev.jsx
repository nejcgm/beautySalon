import React from 'react';
import { useParams } from 'react-router-dom';
import nohti1 from '../assets/nohti1.png'
import nohti2 from '../assets/nohti2.png'
import nohti3 from '../assets/nohti3.png'
import nohti4 from '../assets/nohti4.png'
import pedi from '../assets/pedi.png'
import pedi1 from '../assets/pedi1.png'
import pedi2 from '../assets/pedi2.png'
import pedi3 from '../assets/pedi3.png'
import medicinska1 from '../assets/medicinska1.png'
import medicinska2 from '../assets/medicinska2.png'
import medicinska3 from '../assets/medicinska3.png'
import medicinska4 from '../assets/medicinska4.png'
import lami1 from '../assets/lami1.png'
import lami2 from '../assets/lami2.png'
import lami3 from '../assets/lami3.png'
import lami4 from '../assets/lami4.png'



const services = [
  {
    id: '1',
    title: 'Manikura',
    description: 'Manikura je kozmetična storitev, ki se osredotoča na nego in oblikovanje nohtov na rokah. Postopek vključuje več korakov, ki pomagajo doseči urejene, lepe in zdravju prijazne roke in nohte. Začne se z odstranjevanjem starega laka, če je prisoten, nato pa s čiščenjem nohtov, odstranjevanjem povrhnjice in oblikovanjem nohtov, da dosežemo željeno dolžino in obliko. Manikura običajno vključuje tudi masažo rok in nanosi vlažilne kreme, da koža na rokah ostane mehka in negovana. Na koncu se nohti natančno lakirajo, bodisi s klasičnim lakom ali trajnim gel-lakom, ki zagotavlja dolgotrajen in bleščeč videz. Manikura ni le estetska, temveč pripomore tudi k zdravju nohtov in kože, saj redna nega preprečuje poškodbe nohtov in okužbe.',
    image1: nohti1,
    image2: nohti2,
    image3: nohti3,
    image4: nohti4,
  },
  {
    id: '2',
    title: 'Estetska pedikura',
    description: 'Estetska pedikura je postopek, ki se osredotoča na nego stopal in nohtov, da dosežemo estetski in zdrav videz. Estetska pedikura vključuje odstranjevanje odmrle kože s stopal, oblikovanje nohtov in nego povrhnjice. Stopala se po potrebi namočijo, da se zmehčajo, nato pa se odstranijo trdi deli kože, kot so otiščanci ali kurja očesa. To omogoči, da stopala postanejo mehka in gladka. Nohti se oblikujejo v željeno dolžino in obliko, na koncu pa se lahko nanese tudi lak za nohte, da se doseže eleganten in negovan videz. Estetska pedikura je odlična izbira za tiste, ki želijo ohraniti stopala lepa, brez težav, kot so otiščanci ali suha koža, in uživati v občutku sprostitve.',
    image1: pedi,
    image2: pedi1,
    image3: pedi2,
    image4: pedi3,
  },
  {
    id: '3',
    title: 'Medicinska pedikura',
    description: 'Medicinska pedikura je specializirana storitev, ki se izvaja v primeru težav s stopali, ki zahtevajo strokovno obravnavo. To je najprimernejša storitev za ljudi, ki imajo težave z nohti ali kožo, kot so vraščeni nohti, glivične okužbe, poškodbe nohtov, kurja očesa, otiščanci ali druga zdravstvena vprašanja. Medicinsko pedikuro izvaja strokovnjak, ki je usposobljen za obravnavo teh težav. Postopek vključuje temeljito analizo stanja stopal in nohtov, odstranjevanje odmrle kože, zdravljenje specifičnih težav, kot so vraščeni nohti, in redno nego za preprečevanje morebitnih zapletov. Medicinska pedikura je nujna za ohranjanje zdravja stopal, še posebej pri ljudeh s sladkorno boleznijo, slabo prekrvavitvijo ali drugimi zdravstvenimi težavami, ki vplivajo na zdravje stopal.',
    image1: medicinska1,
    image2: medicinska2,
    image3: medicinska3,
    image4: medicinska4,
  },
  {
    id: '4',
    title: 'Laminacija obrvi',
    description: 'Laminacija obrvi je kozmetični postopek, ki se uporablja za oblikovanje in izboljšanje videza obrvi. Gre za tehniko, pri kateri se s posebnimi kemijskimi izdelki obrvi dvignejo in nahranijo, kar omogoči, da obrvi postanejo bolj polne, naravno oblikovane in gladke. Postopek vključuje uporabo posebnih gelov in rešitev, ki obrvi na nežnem načinu oblikujejo, jih fiksirajo v želenem položaju ter jih naredijo bolj obstojne. Laminacija obrvi ne zahteva vsakodnevnega oblikovanja, saj so obrvi po tretmaju naravno urejene in izgledajo bolj goste. To je odlična izbira za tiste, ki imajo redke, tanke ali nesimetrične obrvi, saj omogoča naraven, a eleganten videz. Postopek običajno traja približno 45 minut in učinek traja do 6-8 tednov. Poleg tega se lahko v okviru laminacije obrvi tudi obarvajo, kar daje dodatno dimenzijo in poudarek. Laminacija obrvi je idealna za ljudi, ki želijo naraven, dolgotrajen in enostaven videz svojih obrvi brez vsakodnevnega truda.',
    image1: lami1,
    image2: lami2,
    image3: lami3,
    image4: lami4,
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Get the dynamic service ID from the URL
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Leva stran naslov in opis */}
        <div className="lg:w-1/2 ">
          <h2 className="text-[64px] uppercase font-bold text-gray-800 mb-4 leading-[64px]">{service.title}</h2>
          <p className="mt-[32px] text-lg text-gray-700">{service.description}</p>
        </div>

        {/* desna stran-4slike dve zgoraj dve spodaj z gapom2 */}
        <div className="lg:w-1/2"> {/*salon na L in D stran*/}
        <div className='grid sm:grid-cols-2 gap-2 '>
          <img 
            src={service.image1}
            
            className="w-[100%] h-[100%] rounded shadow-lg"
          />
           <img
            src={service.image2}
           
            className="w-[100%] h-[100%] rounded shadow-lg "
          />
           <img
            src={service.image3}
           
           className="w-[100%] h-[100%] rounded shadow-lg"
          />
           <img
            src={service.image4}
            
            className="w-[100%] h-[100%] rounded shadow-lg "
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
