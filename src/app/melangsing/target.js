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

export default function Target() {
    return (
        <section id="target">
        <div className="flex flex-col justify-center items-center w-full py-10 px-6 lg:px-24">
    <h1 className={`${montserrat_bold.className} text-[#4e6839] text-5xl text-center`}>Cocok Untuk Siapa?</h1>        
    </div>
    <div className="flex flex-col justify-between items-center w-full py-10 px-6 gap-10 lg:gap-0">
        <div className="flex flex-row w-full lg:w-1/2 justify-start items-start gap-2">
        <Image
        src={"/assets/pp.png"}
        width={0}
        height={0}
        unoptimized
        loading="eager"
        alt="Logo Metto"
        className="rounded-full size-16"
        />
        <div className="flex flex-col">
            <span className={"text-2xl mb-1 text-black "+montserrat_bold.className}>Customer</span>
            <p className={montserrat_regular.className + " py-2 px-4 bg-zinc-200 text-black text-lg rounded-3xl lg:rounded-full"}>Produk Metto Cocok Untuk Siapa?</p>
        </div>
        </div>
        <div className="flex flex-row w-full lg:w-1/2 justify-end items-start gap-2">
        <div className="flex flex-col items-end">
            <span className={"text-2xl mb-1 text-black "+montserrat_bold.className}>Metto</span>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Ibu rumah tangga yang ingin kembali langsing</p>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Karyawan sibuk yang ingin diet praktis</p>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Remaja usia 16+ yang ingin bentuk tubuh ideal</p>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Pasangan muda yang ingin tampil lebih sehat</p>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Lansia yang ingin pencernaan lancar alami</p>
            <p className={montserrat_regular.className + " py-2 px-4 bg-[#4e6839] text-white text-lg text-right rounded-3xl lg:rounded-full mb-2"}>Pejuang detox dan penggemar gaya hidup sehat</p>
        </div>
        <Image
        src={"/assets/logo_metto.jpg"}
        width={0}
        height={0}
        unoptimized
        loading="eager"
        alt="Logo Metto"
        className="rounded-full size-16"
        />
        </div>
    </div>
    </section>
    )
}