"use client"
import Image from "next/image";
import {Montserrat} from 'next/font/google'
import { useState, useEffect } from 'react';


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
  

export default function Hero() {
  const size = useWindowSize();
    return (<>
        {/* Hero */}
    <div className="flex flex-col lg:flex-row w-full justify-between items-center px-1 bg-transparent" style={{paddingTop: `${(size.width<800)?2.75:size.width<1600?0:8}rem`, paddingBottom: `${(size.width<800)?2.75:size.width<1600?0:8}rem`}}>
    <div className="lg:hidden flex flex-col h-full justify-center items-center py-32 pb-56">
      <Image
      src={"/assets/Produk Metto.png"}
      alt="Produk Metto"
      width={0}
      height={0}
      className="w-8/12 absolute z-10 hero_img"
      unoptimized
      loading="eager"
      />
      <Image
      src={"/assets/batu_hero.png"}
      alt="Rock"
      width={0}
      height={0}
      style={{width : "90%", translate: "0 "+Math.floor(size.height/5)+"px"}}
      className={`absolute`}
      loading="eager"
      unoptimized
      />
    </div>
    <div className="flex flex-col text-4xl w-full lg:w-[30%] h-full justify-start items-start lg:mb-52 px-10">
      
      <h1 className={`${montserrat_bold.className} text-[#608148] text-6xl`}>
        Best Diet Combo
      </h1>
      <p className={`${montserrat_regular.className} text-base text-black`}>
      Turunkan berat badan lebih sehat, alami, dan aman tanpa ketergantungan.
      </p>
      <p className={`${montserrat_bold.className} text-base text-[#608148]`}>
      Perpaduan 2 teh herbal terbaik untuk bantu atasi obesitas & sembelit.
      </p>
      <div className="flex flex-row justify-start gap-3 pt-5">
      <Image src={"/assets/Halal_Indonesia.svg"} width={0} height={0} loading="eager" className="h-24 w-auto" alt='Check icon'/>
      <Image src={"/assets/Logo BPOM.svg"} width={0} height={0} loading="eager" className="h-24 w-auto" alt='Check icon'/>
      </div>
    </div>

    <div className="hidden lg:flex flex-col w-1/4 h-full justify-center items-center relative">
      <Image
      src={"/assets/Produk Metto.png"}
      alt="Produk Metto"
      width={0}
      height={0}
      className="w-full absolute z-30 hero_img"
      unoptimized
      loading="eager"
      />
      <Image
      src={"/assets/batu_hero.png"}
      alt="Rock"
      width={0}
      height={0}
      style={{width : "150%", translate: "0 "+Math.floor(size.height/4)+"px"}}
      className={`absolute z-20`}
      loading="eager"
      unoptimized
      />
    </div>
    <div className="flex flex-col w-full lg:w-1/4 h-full justify-center items-center py-6 lg:py-3">
      <div className="lg:flex flex-col justify-center items-center size-full">
        <Image
        src={"/assets/daun_hero.png"}
        alt="Tea leaf"
        width={0}
        height={0}
        unoptimized
        loading="eager"
        className="w-full lg:scale-150 lg:-rotate-12 lg:mb-36 lg:-translate-x-10"
        />
      </div>
      
    </div>
</div>
    {/* Hero end */}
    {/* Background Hero */}
    <div className="w-full  flex justify-center items-center relative">
      <Image 
      src="/assets/hero_bg.png"
      alt="hero bg"
      width={0} 
      height={0}
      unoptimized
      className="absolute bottom-0 h-auto w-[500%] lg:w-screen -z-10 lg:translate-y-28 translate-y-4 "
      />
      </div>
     
      {/* Background Hero End */}
    </>
    )
    // Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

}