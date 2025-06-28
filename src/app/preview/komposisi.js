import {Montserrat} from 'next/font/google'
import Image from "next/image";

const montserrat_regular = Montserrat({
    weight: '400',
    subsets: ['latin'],
  })
  const montserrat_medium = Montserrat({
    weight: '500',
    subsets: ['latin'],
  })
  const montserrat_semibold = Montserrat({
    weight: '600',
    subsets: ['latin'],
  })
  const montserrat_bold = Montserrat({
    weight: '700',
    subsets: ['latin'],
  })
  const montserrat_extrabold = Montserrat({
    weight: '800',
    subsets: ['latin'],
  })
  const montserrat_extrabold_i = Montserrat({
    weight: '800',
    subsets: ['latin'],
    style: 'italic'
  })
  
  
  const komposisi_slim = [
    "Daun Jati Belanda / Guazuma ulmifolia Folium",
  "Daun Teh Hijau / Camelia sinensis Folium",
  "Daun Kemuning / Murraya paniculata Folium",
  "Kayu rapet /Parameria laevigata Cortex",
  "Rimpang Bangle / Zingiber purpureum Rhizoma"
  ]
  const manfaat_slim = [
    "Membantu menurunkan berat badan",
    "Mengurangi lemak",
    "Mempercepat metabolisme",
    "Melancarkan pencernaan"
  ]
  const komposisi_senna = [
    "Daun Jati Cina / Cassiae sennae Folium",
    "Daun Teh Hijau / Camellia sinensis Folium",
    "Daun Kemuning / Murraya paniculata Folium",
    "Adas /Foeniculum vulgare Semen",
    "Rimpang Bangle / Zingiber purpureum Rhizoma",
    "Kayu Manis / Cinnamomi burmannii Cortex"
  ]
  const manfaat_senna = [
    "Melancarkan BAB",
    "Mengatasi sembelit",
    "Detox racun dari tubuh",
    "Melancarkan pencernaan",
    "Menstimulasi metabolisme"
  ]

export default function Komposisi() {

return(
    <section id="komposisi">
      <div className="flex flex-col justify-center items-center w-full py-10 px-6 lg:px-24 relative">
        <div className="mb-5 lg:mb-10 flex flex-col justify-center">
      <h1 className={`${montserrat_bold.className} text-[#4e6839] text-5xl text-center`}>KENALAN DENGAN METTO</h1>
      <span className={`${montserrat_regular.className} text-black text-[1.7rem] text-center`}>Membantu Turunkan Obesitas</span>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center mb-16'>
        <span className={`${montserrat_bold.className} text-2xl text-[#4e6839] text-center`}>METTO ADALAH KOMBINASI 2 PRODUK HERBAL:</span>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-1 border-2 border-[#4e6839] rounded-full py-2 px-5 hover:shadow-lg hover:scale-110 transition-all duration-500'>
            <span className={`${montserrat_bold.className} text-xl text-[#4e6839] text-center`}>Metto Slimming Tea</span>
            <span className={`${montserrat_regular.className} text-xl text-[#4e6839] text-center`}>Bantu turunkan lemak & berat badan</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 border-2 border-[#4e6839] rounded-full py-2 px-5 hover:shadow-lg hover:scale-110 transition-all duration-500'>
            <span className={`${montserrat_bold.className} text-xl text-[#4e6839] text-center`}>Metto Senna Leaf Mix Herba</span>
            <span className={`${montserrat_regular.className} text-xl text-[#4e6839] text-center`}>Bantu melancarkan BAB & detox tubuh</span>
          </div>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
        <span className={`${montserrat_regular.className} text-xl text-[#4e6839] text-center`}>Diformulasikan dari bahan herbal alami tanpa pengawet, tanpa gula tambahan.</span>
        </div>
      </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3">
          <div className="flex flex-col jutify-start w-10/12 lg:w-1/2">
          <div className="py-10">
            <span className={`${montserrat_semibold.className} text-c_green text-4xl`}>Metto Slimming Tea</span>
            <div className=" my-6 lg:my-3 px-2 py-2 w-full lg:w-1/4 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base">
              Komposisi :
          </div>  
            <ul className="list-disc list-inside">
            {komposisi_slim.map(item => (
              <li className={"mt-1 text-black "+montserrat_medium.className} key={item}>{item}</li>
            ))}
            </ul>
            <div className=" my-6 lg:my-3 px-2 py-2 w-full lg:w-1/4 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base">
              Manfaat :
          </div>  
            <ul className="list-disc list-inside">
            {manfaat_slim.map(item => (
              <li className={"mt-1 text-black "+montserrat_medium.className} key={item}>{item}</li>
            ))}
            </ul>
          </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <Image
            src={"/assets/metto_slim_comp.png"}
            alt="Metto Slimming Tea With Composition"
            width={0}
            height={0}
            style={{width : "100%"}}
            unoptimized
            loading="eager"
            />
            <span className={`${montserrat_regular.className} text-2xl text-[#4e6839] text-center mt-3`}>Sertifikasi</span>
            <span className={`${montserrat_bold.className} text-2xl text-[#4e6839] text-center`}>BPOM TR213285161 | Halal MUI</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          
          <div className="flex flex-col w-full lg:w-1/2">
            <Image
            src={"/assets/metto_senna_comp.png"}
            alt="Metto Slimming Tea With Composition"
            width={0}
            height={0}
            style={{width : "100%"}}
            unoptimized
            loading="eager"
            />
          <span className={`${montserrat_regular.className} text-2xl text-[#4e6839] text-center mt-3`}>Sertifikasi</span>
          <span className={`${montserrat_bold.className} text-2xl text-[#4e6839] text-center`}>BPOM TR222034691 | Halal MUI</span>
          </div>
          <div className="flex flex-col jutify-start w-10/12 lg:w-1/2">
          <div className="py-10">
            <span className={`${montserrat_semibold.className} text-c_green text-3xl`}>Metto Senna Leaf Mix Herba</span>
            <div className=" my-6 lg:my-3 px-2 py-2 w-full lg:w-1/4 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base">
              Komposisi :
          </div>  
            <ul className="list-disc list-inside">
            {komposisi_senna.map(item => (
              <li className={"mt-1 text-black "+montserrat_medium.className} key={item}>{item}</li>
            ))}
            </ul>
            <div className=" my-6 lg:my-3 px-2 py-2 w-full lg:w-1/4 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base">
              Manfaat :
          </div>  
            <ul className="list-disc list-inside">
            {manfaat_senna.map(item => (
              <li className={"mt-1 text-black "+montserrat_medium.className} key={item}>{item}</li>
            ))}
            </ul>
          </div>
          </div>
        </div>
        <div className="width-1/2 flex flex-row">
      <Image 
      className="absolute bottom-0 left-0 h-auto w-1/4 -z-10"
      src="/assets/Background Komposisi Metto Kiri.png"
      alt="hero bg"
      objectFit="cover"
      width={0} 
      height={0}
      style={"width: 100%"}
      unoptimized
      loading="eager"
      />
      </div>
        <div className="width-1/2 flex flex-row">
      <Image 
      className="absolute top-0 right-0 h-auto w-1/4 -z-10"
      src="/assets/Background Komposisi Metto Kanan.png"
      alt="hero bg"
      objectFit="cover"
      width={0} 
      height={0}
      style={"width: 100%"}
      unoptimized
      loading="eager"
      />
      </div>
      </div>
      </section>
)


}