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

export default function Selling() {
    return ( 
        <div className="flex flex-col justify-center items-center py-10 lg:py-0 px-5 lg:px-24 relative">
            <div className="w-full lg:w-3/5">
            <h1 className={montserrat_bold.className + " text-[#608148] text-5xl lg:text-6xl text-center"}>Siap Punya Tubuh Ideal Tanpa Diet Menyiksa?</h1>
            </div>
            <div className="w-4/5 flex flex-col justify-center items-center py-10 lg:py-20">
            <span className={`${montserrat_regular.className} text-[#608148] text-center text-2xl`}>Klik tombol <strong>“ORDER SEKARANG”</strong> di bawah ini untuk dapatkan Metto Original!</span>
            <div className={"flex flex-col lg:flex-row "+montserrat_bold.className}>
                <div className="flex flex-row gap-1 items-center justify-start lg:justify-center"><Image src={"/assets/check.svg"} width={0} height={0} loading="eager" className="size-14" alt='Check icon'/><span className="text-[#608148] text-2xl">Fast response</span></div>
                <div className="flex flex-row gap-1 items-center justify-start lg:justify-center"><Image src={"/assets/check.svg"} width={0} height={0} loading="eager" className="size-14" alt='Check icon'/><span className="text-[#608148] text-2xl">Siap kirim seluruh Indonesia</span></div>
                <div className="flex flex-row gap-1 items-center justify-start lg:justify-center"><Image src={"/assets/check.svg"} width={0} height={0} loading="eager" className="size-14" alt='Check icon'/><span className="text-[#608148] text-2xl">Bisa COD</span></div>
            </div>
            <Link href={"https://vt.tiktok.com/ZS6beVcyR/?page=Mall"} className={`${montserrat_semibold.className} text-white text-3xl text-center rounded-full bg-[#608148] px-10 py-5 mt-7 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-500`}>ORDER SEKARANG</Link>
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
    )

}