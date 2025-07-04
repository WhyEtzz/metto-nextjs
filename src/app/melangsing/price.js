"use client"
import Image from "next/image";
import Link from 'next/link';
import dynamic from "next/dynamic";
import {Montserrat} from 'next/font/google'
const PixelButtonTracker = dynamic(() => import("../../components/Pixelbutton Tracker"), { ssr: false });
import {useRouter}  from 'next/navigation';


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
 
const contact = "https://wa.me/message/MINON2EJV3GFB1"

export default function Pricing() {
    const router = useRouter();
    
  
    const handleClick = async () => {
        PixelButtonTracker()
        router.push("https://wa.me/message/MINON2EJV3GFB1");
    };

    return (<>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 mt-32">
            {/* Card */}
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg px-10 py-10 border-4 border-[#608148] lg:w-1/5 w-10/12 bg-white">
                <span className={`${montserrat_bold.className} text-[#608148] text-4xl text-center`}>Metto Slimming Tea</span>
                <span className={`${montserrat_regular.className} text-[#608148] text-lg text-center`}> Harga Normal: Rp30.500</span>
                <span className={`${montserrat_regular.className} text-black text-lg mt-6 text-center`}>Harga Promo:</span>
                <span className={`${montserrat_bold.className} text-black text-5xl text-center`}>Rp27.800</span>
                <Link href={contact} className={`${montserrat_semibold.className} text-white text-2xl text-center rounded-full bg-[#608148] px-10 py-1 mt-7 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-500`} onClick={}>Buy Now</Link>
                <span className={`${montserrat_regular.className} text-[#608148] text-lg text-center my-14`}>Bantu anda untuk melancarkan buang air besar (BAB) dan detox tubuh</span>
            </div>
            {/* Card End */}
            {/* Card */}
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg px-12 py-12 bg-[#608148] lg:w-1/5 w-10/12">
                <span className={`${montserrat_bold.className} text-white text-5xl text-center my-10`}>Bundling Combo</span>
                <span className={`${montserrat_regular.className} text-white text-lg text-center mt-6`}> Metto Slimming Tea & Metto Senna Leaf Mix Herbal</span>
                <span className={`${montserrat_regular.className} text-white text-lg mt-6 text-center`}>Harga Promo:</span>
                <span className={`${montserrat_bold.className} text-white text-5xl text-center`}>Rp52.000</span>
                <Link href={contact} className={`${montserrat_semibold.className} text-[#608148] text-2xl text-center rounded-full bg-white px-10 py-1 mt-7 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-500 mb-14`} onClick={}>Buy Now</Link>
            </div>
            {/* Card End */}
            {/* Card */}
            <div className="flex flex-col justify-center items-center rounded-3xl shadow-lg px-10 py-10 border-4 border-[#608148] lg:w-1/5 w-10/12 bg-white">
                <span className={`${montserrat_bold.className} text-[#608148] text-4xl text-center`}>Metto Senna Leaf Mix Herba</span>
                <span className={`${montserrat_regular.className} text-[#608148] text-lg text-center`}> Harga Normal: Rp30.500</span>
                <span className={`${montserrat_regular.className} text-black text-lg mt-6 text-center`}>Harga Promo:</span>
                <span className={`${montserrat_bold.className} text-black text-5xl text-center`}>Rp27.800</span>
                <Link href={contact} className={`${montserrat_semibold.className} text-white text-2xl text-center rounded-full bg-[#608148] px-10 py-1 mt-7 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-500`} onClick={}>Buy Now</Link>
                <span className={`${montserrat_regular.className} text-[#608148] text-lg text-center my-14`}>Bantu kamu menurunkan berat badan dan melancarkan lemak</span>
            </div>
            {/* Card End */}
        </div>
        <div className="text-center flex flex-row justify-between w-full items-center px-28">
      <Image
      src={"/assets/leaf_top.png"}
      alt="leaf"
      width={0}
      height={0}
      className="hidden lg:block w-36 scale-110 rotate-12"
      unoptimized
      />      
      <Image
      src={"/assets/leaf_top.png"}
      alt="leaf"
      width={0}
      height={0}
      className="hidden lg:block w-36 scale-110 -rotate-180"
      unoptimized
      />
    </div>
        {/* Background Hero */}
        <div className="w-full flex justify-center items-center relative">
        <Image 
        src="/assets/Pricing_bg.png"
        alt="Background Teapot"
        width={0} 
        height={0}  
        unoptimized
        className="absolute bottom-1/2 h-auto w-[500%] lg:w-screen -z-30 lg:-translate-y-1/3 translate-y-4"
        />
        </div>
       
        {/* Background Hero End */}
        </>
    )
}