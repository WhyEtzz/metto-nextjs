import {Montserrat} from 'next/font/google'
import Nav from "./navbar";
import Hero from "./hero";
import ScrollPercentage from './scroll'
import Testimoni from "./testimoni";
import Selling from "./selling";
import Preloading from "./preload";
import Komposisi from "./komposisi"
import Bridge from "./bridge";
import Problem from "./problem";
import About from "./more_about";
import Pricing from "./price";
import Target from "./target";
import Footer from "./footer";


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
      <ScrollPercentage/>
      <Preloading/>
      {/* Navbar */}
      <Nav/>
      {/* Navbar end */}
      {/* Hero */}
      <Hero/>
      {/* Hero end */}
      
      {/* Problem */}
      <Problem/>
      {/* Problem End */}
      {/* Bridge */}
      <Bridge/>
      {/* Bridge end */}
      {/* Komposisi */}
      <Komposisi/>
      {/* Komposisi End */}
      {/* Keunggulan */}
      <About/>
      {/* Keunggulan End */}
      {/* Target */}
      <Target/>
      {/* Target End */}
      {/* Testimoni*/}
      <Testimoni/>       
      {/* Testimoni End */}
      {/* Pricing */}
      <Pricing/>
      {/* Pricing End */}
      
      {/* FAQ */}
      <Selling/>
      {/* FAQ End */}
      {/* Footer */}
      <Footer/>
      {/* Footer End */}
      
  </>
  );
}
