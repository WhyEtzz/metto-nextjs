"use client" 
import Swal from 'sweetalert2'
import Image from "next/image";
import withReactContent from 'sweetalert2-react-content'
import {Montserrat} from 'next/font/google'
import { useRef, useEffect  } from 'react'
import _ from "lodash";


const montserrat_bold = Montserrat({
  weight: '700',
  subsets: ['latin'],
})

export default function Testimoni() {
  const test1 = useRef();
  const test2 = useRef();
  const test3 = useRef();
  const test4 = useRef();

  


  useEffect(() => {
    function popup() {
      Swal.fire({
        showConfirmButton: false,
        imageUrl: `/resource/testimoni/1.jpeg`,
        background: `#fff url(${`/resource/testimoni/1.jpeg`})`,
        imageWidth: 600,
        imageHeight: 400,
        showCloseButton: true
      })
    }
     

    test1.current.addEventListener('click', popup);

    return () => {
      test1.current.removeEventListener('click', popup);
       
      };
  });
  useEffect(() => {
    function popup() {
      Swal.fire({
        showConfirmButton: false,
        imageUrl: `/resource/testimoni/2.jpeg`,
        background: `#fff url(${`/resource/testimoni/2.jpeg`})`,
        imageWidth: 600,
        imageHeight: 400,
        showCloseButton: true
      })
    }
     

    test2.current.addEventListener('click', popup);

    return () => {
      test2.current.removeEventListener('click', popup);
       
      };
  });
  useEffect(() => {
    function popup() {
      Swal.fire({
        showConfirmButton: false,
        imageUrl: `/resource/testimoni/4.jpeg`,
        background: `#fff url(${`/resource/testimoni/4.jpeg`})`,
        imageWidth: 600,
        imageHeight: 400,
        showCloseButton: true
      })
    }
     

    test4.current.addEventListener('click', popup);

    return () => {
      test4.current.removeEventListener('click', popup);
       
      };
  });
  useEffect(() => {
    function popup() {
      Swal.fire({
        showConfirmButton: false,
        imageUrl: `/resource/testimoni/3.jpeg`,
        background: `#fff url(${`/resource/testimoni/3.jpeg`})`,
        imageWidth: 600,
        imageHeight: 400,
        showCloseButton: true
      })
    }
     

    test3.current.addEventListener('click', popup);

    return () => {
      test3.current.removeEventListener('click', popup);
       
      };
  });

  
       
    return (
        <div className="flex flex-col w-full px-10 lg:px-52 py-10 justify-center items-center relative">
    <div className="text-4xl text-c_green text-center">
      <h1 className={montserrat_bold.className}>Apa Kata Mereka</h1>
    </div>
    <div className="flex flex-col justify-center items-center px-10">
    <div className="flex flex-col lg:flex-row justify-center py-5 w-full gap-5">
    {_.times(4, (i) => (
            <div className="flex flex-col items-center justify-center border-2 rounded-xl w-full lg:w-[1/5] h-3/5 hover:shadow-lg hover:scale-105 transition-all duration-700 cursor-pointer relative" key={i} ref={eval(`test${i+1}`)}>
              <div className='p-5 rounded-full bg-white flex justify-center items-center absolute size-28'>
              <img src='/zoom.svg' alt='zoom icon' className='size-3/4'/>
              </div>
            <img src={`/resource/thumbnail/${i+1}.png`} alt="upgrade icon" className="rounded-xl" />
         </div>
          ))}
  </div>
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