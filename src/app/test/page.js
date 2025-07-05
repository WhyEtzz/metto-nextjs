import {Montserrat} from 'next/font/google'
import Pricing from "./price-test";
import FacebookPixel from "./_app"


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




export default function Home() {

  return (
    <>
    {/*      
    <Dotes/>
    */}
      <FacebookPixel/>
      
      {/* Pricing */}
      <Pricing/>
      {/* Pricing End */}

      
  </>
  );
}
