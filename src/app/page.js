import Image from "next/image";
import Link from 'next/link';
import {Montserrat} from 'next/font/google'
import ScrollPercentage from './scroll'
import Carousel from "./carousel";
import Dotes from "./dot";
import Render3d_slim from "./3d_slim";
import Render3d_senna from "./3d_senna";
import Testimoni from "./testimoni";
import FAQ from "./faq";
import Toko from "./toko";
import Preloading from "./preload";



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
const komposisi_senna = [
  "Daun Jati Cina / Cassiae sennae Folium",
  "Daun Teh Hijau / Camellia sinensis Folium",
  "Daun Kemuning / Murraya paniculata Folium",
  "Adas /Foeniculum vulgare Semen",
  "Rimpang Bangle / Zingiber purpureum Rhizoma",
  "Kayu Manis / Cinnamomi burmannii Cortex"
]


export default function Home() {

  return (
    <>
    {/*      
    <Dotes/>
    */}
    <ScrollPercentage/>
    <Preloading/>
    {/* Navbar */}
    <div className="flex flex-row items-center bg-transparent py-7 px-6 lg:px-24 justify-between w-full">
      <div className="flex flex-row w-1/2 h-100%">
      <Link href="/" className="h-full">
      <Image
        className="h-screen"
        src="/assets/Logo Metto Header.svg"
        alt="Metto logo"
        height={0}
        width={0}
        priority
        style={{ width: 'auto', height: '3rem' }}
      />
      </Link>
      </div>
      <div className="flex flex-row w-1/2 h-full justify-end text-right">
      <span className={`${montserrat_bold.className} text-c_green`}><span className="text-c_yellow">ME</span>MBAN<span className="text-c_yellow">T</span>U <span className="text-c_yellow">T</span>URUNKAN <span className="text-c_yellow">O</span>BESITAS</span>
      </div>
    </div>
    {/* Navbar end */}
   {/* Hero */}
    <div className="flex flex-col lg:flex-row w-full justify-center items-center px-6 lg:px-24 bg-transparent">
    <div className="flex lg:hidden flex-col w-full justify-center items-center">
        <Image
        src={"/assets/Background Sekunder Metto.svg"}
        alt="Background Sekunder Metto"
        width={0}
        height={0}
        style={{width : "80%"}}
        loading="eager"
        />
        <Image
        src={"/assets/Produk Metto.png"}
        alt="Produk Metto"
        width={0}
        height={0}
        style={{width : "50%"}}
        className="absolute z-30 hero_img"
        unoptimized
        loading="eager"
        />
        <Image
        src={"/assets/BPOM Halal Metto.svg"}
        alt="Produk Metto"
        width={0}
        height={0}
        style={{width : "65%"}}
        className="absolute z-40 top-[21rem]"
        unoptimized
        loading="eager"
        />
      </div>
      <div className="flex flex-col text-4xl w-full lg:w-1/4 items-start px-10 lg:my-0 my-8">
        <h1 className={`${montserrat_bold.className} text-black`}>
          Best Diet
        </h1>
        <h1 className={`${montserrat_bold.className} text-black`}>
          Combo
        </h1>
        <p className={`${montserrat_regular.className} text-lg text-black`}>
        Perpaduan terbaik 100% bahan alami berkualitas untuk membantu turunkan obesitas.
        </p>
        <Link href={"#komposisi"} className="w-full lg:w-10/12 mt-10">
        <div className="px-2 py-2 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base hover:scale-110 transition-all duration-500">
        Pelajari Selengkapnya
      </div>
      </Link>
      <div className="flex flex-row mt-10 gap-3 items-center lg:items-start">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
          <h1 className={"text-center text-3xl text-c_green "+montserrat_bold.className}>Day Tea</h1>
          <Image
          src={"/assets/Day Tea metto.svg"}
          width={0}
          height={0}
          style={{width : "50%"}}
          alt="day tea"
          loading="eager"
          />
          <span className={"text-base text-center text-black "+montserrat_regular.className}> Metto Slimming Tea </span>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
          <h1 className={"text-3xl text-center text-c_green "+montserrat_bold.className}>Night Tea</h1>
          <Image
          src={"/assets/Night Tea metto.svg"}
          width={0}
          height={0}
          style={{width : "50%"}}
          alt="day tea"
          loading="eager"
          />
          <span className={"text-base text-center text-black "+montserrat_regular.className}> Metto Senna Leaf Mix Herba </span>
        </div>
      </div>
      </div>
      <div className="hidden lg:flex flex-col w-2/4 justify-center items-center">
        <Image
        src={"/assets/Background Sekunder Metto.svg"}
        alt="Background Sekunder Metto"
        width={0}
        height={0}
        style={{width : "80%"}}
        loading="eager"
        />
        <Image
        src={"/assets/Produk Metto.png"}
        alt="Produk Metto"
        width={0}
        height={0}
        style={{width : "30%"}}
        className="absolute z-30 hero_img"
        unoptimized
        loading="eager"
        />
        <Image
        src={"/assets/BPOM Halal Metto.svg"}
        alt="Produk Metto"
        width={0}
        height={0}
        style={{width : "25%"}}
        className="absolute z-40 bottom-[12rem]"
        loading="eager"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/4 justify-center items-center py-6 lg:py-3">
      <h1 className={`${montserrat_bold.className} text-black text-4xl lg:text-3xl`}>
          RULE COMBO
        </h1>
        <div className="hidden lg:flex flex-col justify-center items-center gap-4 mt-10">
          <Image
          src={"/assets/hero_abtmetto_s.png"}
          alt="About Metto Slimming Tea"
          width={0}
          height={0}
          style={{width : "50%"}}
          unoptimized
          loading="eager"
          />
          <Image
          src={"/assets/hero_abtmetto_sl.png"}
          alt="About Metto Slimming Tea"
          width={0}
          height={0}
          style={{width : "50%"}}
          unoptimized
          loading="eager"
          />
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center gap-4 mt-10 w-full">
          <Image
          src={"/assets/hero_abtmetto_s.png"}
          alt="About Metto Slimming Tea"
          width={0}
          height={0}
          style={{width : "80%"}}
          unoptimized
          loading="eager"
          />
          <Image
          src={"/assets/hero_abtmetto_sl.png"}
          alt="About Metto Slimming Tea"
          width={0}
          height={0}
          style={{width : "80%"}}
          unoptimized
          loading="eager"
          />
        </div>
      </div>
  </div>
      {/* Hero end */}
      {/* Background Hero */}
      <div className="width-1/2 flex flex-row justify-between">
      <Image 
      className="absolute bottom-0 right-0 h-auto w-1/4 -z-10"
      src="/assets/Background Primer Metto Kanan.png"
      alt="hero bg"
      width={0} 
      height={0}
      style={"width: 50%, objectFit: cover"}
      unoptimized
      />
      </div>
      <div className="width-1/2 flex flex-row justify-between ">
      <Image 
      className="absolute top-0 left-0 h-auto w-1/4 -z-10"
      src="/assets/Background Primer Metto Kiri.png"
      alt="hero bg"
      objectFit="cover"
      width={0} 
      height={0}
      style={"width: 50%, objectFit: cover"}
      unoptimized
      />
      </div>
      {/* Background Hero End */}

      {/* Bridge */}
      <div className="w-full flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-1/5 bg-c_green flex flex-row justify-center items-center p-5 lg:p-10">
          <Image
          src={"/assets/Logo Metto Putih.svg"}
          alt="White Logo Metto"
          width={0}
          height={0}
          style={{width : "25%"}}
          className="lg:hidden block"
          loading="eager"
          />
          <Image
          src={"/assets/Logo Metto Putih.svg"}
          alt="White Logo Metto"
          width={0}
          height={0}
          style={{width : "50%"}}
          className="hidden lg:block"
          loading="eager"
          />
        </div>
        <div className="flex flex-row justify-center items-center bg-[#045E4D] w-full lg:w-4/5 p-5 lg:p-10">
        <h1 className={`${montserrat_bold.className} text-white text-xl lg:text-3xl text-center  `}>
          MEMBANTU TURUNKAN OBESITAS
        </h1>
        </div>
      </div>
      {/* Bridge end */}


      {/* Komposisi */}
      <section id="komposisi">
      <div className="flex flex-col justify-center items-center w-full py-10 px-6 lg:px-24 relative">
        <div className="mb-10">
      <h1 className={`${montserrat_bold.className} text-black text-4xl text-center`}>KENALI PRODUK METTO LEBIH DALAM</h1>
      </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3">
          <div className="flex flex-col jutify-start w-10/12 lg:w-1/2">
          <div className="py-10">
            <span className={`${montserrat_semibold.className} text-c_green text-3xl`}>Metto Slimming Tea</span>
            <div className=" my-6 lg:my-3 px-2 py-2 w-full lg:w-1/4 rounded-full bg-c_yellow flex justify-center items-center text-center text-white text-base">
              Komposisi :
          </div>  
            <ul className="list-disc list-inside">
            {komposisi_slim.map(item => (
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
      {/* Komposisi End */}
      {/* Carousel */}
      <div className="flex flex-col justify-center items-center w-full py-10 px-6 lg:px-24 relative bg-zinc-50">
      <Carousel/>
      </div>
      {/* Carousel End */}
      {/* Testimoni*/}
      <Testimoni/>       
      {/* Testimoni End */}
      {/* 3d */}
      <div className="flex lg:hidden flex-col justify-center items-center w-full py-10 px-6 lg:px-24">
      <h1 className={`${montserrat_bold.className} text-4xl text-c_green mb-10 text-center`}>Detail Visual Kemasan</h1>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full h-[30rem] px-6 lg:px-24 py-0 justify-center items-center gap-5">
      <Render3d_slim/>
      <div className="relative h-full flex flex-col justify-center items-center">
      <div className="hidden flex-col w-full justify-end absolute top-28 lg:flex">
      <h1 className={`${montserrat_bold.className} text-4xl text-c_green mb-10`}>Detail Visual Kemasan</h1>
      </div>
      <div className="flex flex-col gap-2 items-center lg:items-start">
      <h1 className={`${montserrat_bold.className} text-4xl text-black text-center lg:text-left`}>Metto Slimming Tea</h1>
      <p className={`${montserrat_regular.className} text-lg text-black text-center lg:text-left w-3/5`}>Berikut Tampilan Kemasan Produk Metto Slimming Tea Dari Berbagai Sisi.</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-[30rem] px-6 lg:px-24 py-0 justify-center items-center relative gap-5">
      <Render3d_senna/>
      <div className="flex flex-col gap-2 items-center lg:items-end">
            <h1 className={`${montserrat_bold.className} text-4xl text-black text-center lg:text-right`}>Metto Senna Leaf Mix Herba</h1>
            <p className={`${montserrat_regular.className} text-lg text-black text-center lg:text-right w-3/5`}>Berikut Tampilan Kemasan Produk Metto Senna leaf Mix Herba Dari Berbagai Sisi.</p>
      </div>
      <div className="width-1/2 flex flex-row">
      <Image 
      className="absolute bottom-0 left-0 h-auto w-1/4 -z-20"
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
      </div>
      {/* 3d End*/}
      {/* FAQ */}
      <FAQ/>
      {/* FAQ End */}
      {/* Find Us */}
      <Toko/>
      {/* FAQ End */}
      {/* Footer */}
      <div className="w-full flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-1/5 bg-c_green flex flex-row justify-center items-center p-3 lg:p-8">
          <Image
          src={"/assets/Logo Metto Putih.svg"}
          alt="White Logo Metto"
          width={0}
          height={0}
          style={{width : "25%"}}
          className="lg:hidden block"
          loading="eager"
          />
          <Image
          src={"/assets/Logo Metto Putih.svg"}
          alt="White Logo Metto"
          width={0}
          height={0}
          style={{width : "50%"}}
          className="hidden lg:block"
          loading="eager"
          />
        </div>
        <div className="flex flex-row justify-start lg:justify-center items-center bg-[#045E4D] w-full lg:w-4/5 p-3 lg:p-8">
        <h1 className={`${montserrat_semibold.className} text-white text-sm lg:text-xl text-center  `}>
        Copyright © 2025 Metto Official
        </h1>
        <div className="flex flex-row justify-end items-center text-white absolute right-2 lg:right-8 gap-3">
          <a href="https://www.instagram.com/metto_official/">
            <img src="/assets/instagram.svg" alt="instagram" className="size-6 lg:size-8 invert cursor-pointer"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100081286069893">
            <img src="/assets/facebook.svg" alt="facebook" className="size-6 lg:size-8 invert cursor-pointer"/>
            </a>
        </div>
        </div>
      </div>
      {/* Footer End */}
      
  </>
  );
}
