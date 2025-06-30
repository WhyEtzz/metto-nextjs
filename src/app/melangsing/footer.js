import Image from "next/image";
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

export default function Footer() {
    return (
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
    )
}