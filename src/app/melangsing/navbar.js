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

export default function Nav() {
    return (
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
    )
}