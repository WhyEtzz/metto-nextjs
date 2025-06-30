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
  
export default function Bridge() {
    return (
        <div className="w-full flex flex-col lg:flex-row">
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
    )
}