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

const problem = [
 "Berat badan naik terus meski sudah jaga makan",
 "Sering sembelit, perut kembung, metabolisme lambat",
 "Diet gagal karena tidak konsisten atau bikin lemas",
 "Takut konsumsi obat pelangsing yang berbahaya",
 "Ingin detox tubuh tapi takut efek samping"
]

export default function Problem() {
    return (
        <div className="flex flex-col lg:flex-row items-center pb-10 lg:pb-0 pt-10 lg:pt-52">
      <div className="flex w-4/5 lg:w-1/3 justify-center">
      <Image
      src={"/assets/fat.png"}
      width={0}
      height={0}
      unoptimized
      loading="eager"
      alt="Obesity Women"
      className={"w-full"}
      />
      </div>
      <div className="flex flex-col justify-center items-start w-9/12 lg:w-2/3">
      <h1 className={`${montserrat_bold.className} text-4xl lg:text-6xl text-[#4e6839] py-5`}>Kalian Mengalami Ini?</h1>
      {problem.map(item => (
        <div className="flex flex-row items-center w-full gap-3" key={item}> <Image src={"/assets/cross.svg"} width={0} height={0} loading="eager" className="size-12 lg:size-14" alt='Cross icon'/> <span className={`${montserrat_regular.className} text-xl lg:text-2xl text-[#4e6839]`}>{item}</span> </div>
    ))}
      </div>
      </div>
    )
}