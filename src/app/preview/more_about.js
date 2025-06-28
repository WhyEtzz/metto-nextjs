import Image from "next/image";
import Link from 'next/link';
import {Montserrat} from 'next/font/google'

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

export default function About() {
    return (<>
        {/* Hero */}
        <div className="flex flex-col w-full justify-center items-center px-6 lg:px-24 bg-transparent py-11 lg:py-32">
        <div className="flex flex-row w-full justify-center items-center">
        <h1 className={`${montserrat_bold.className} text-[#608148] text-5xl lg:text-6xl text-center`}>Keunggulan Metto</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-5 px-0 lg:px-52 pt-16 lg:pb-[27rem] pb-10">
        <div className="flex flex-col w-full lg:w-1/2 gap-3">
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>01</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>100% herbal alami</span></div>
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>02</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>Tanpa gula tambahan & pengawet</span></div>
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>03</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>Tidak bikin ketergantungan</span></div>
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>04</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>BPOM & Halal</span></div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-3">
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>05</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>Dapat diminum saat puasa(sahur & berbuka)</span></div>
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>06</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>Mulai bisa dikonsumsi usia 16 tahun ke atas</span></div>
        <div className="flex flex-row gap-3 items-center"><h3 className={`${montserrat_bold.className} text-4xl text-[#608148]`}>07</h3> <span className={`${montserrat_regular.className} text-2xl text-[#608148]`}>Mudah diseduh seperti teh biasa</span></div>
        </div>
      </div>
      </div>
          {/* Hero end */}
          {/* Background Hero */}
          <div className="w-full flex justify-center items-center relative">
          <Image 
          src="/assets/bg Keunggulan.png"
          alt="Background Teapot"
          width={0} 
          height={0}
          
          unoptimized
          className="absolute bottom-0 h-auto w-[500%] lg:w-screen -z-10 lg:translate-y-0 translate-y-4 rotate-180"
          />
          </div>
         
          {/* Background Hero End */}
          </>
    )
}