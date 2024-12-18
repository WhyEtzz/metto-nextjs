"use client" 
const { useEffect, useRef } = require("react");

export default function Carousel() {
    

    let prev = useRef()
    let next = useRef()
    console.log(prev.current)
    useEffect(() => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        function slider_back() {
            sleep(500).then(() => {

            prev.current.href = "#slide"+(Number(prev.current.href.split("slide")[1])-1 <= 0?4:Number(prev.current.href.split("slide")[1])-1)
            next.current.href = "#slide"+(Number(next.current.href.split("slide")[1])-1 <= 0?4:Number(next.current.href.split("slide")[1])-1)
             })
        }
         
    
        prev.current.addEventListener('click', slider_back);

        return () => {
            prev.current.removeEventListener('click', slider_back);
           
          };
      });
    
      useEffect(() => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }   
        function slider_next() {
            sleep(500).then(() => {
            prev.current.href = "#slide"+(Number(prev.current.href.split("slide")[1])+1 >= 5?1:Number(prev.current.href.split("slide")[1])+1)
            next.current.href = "#slide"+(Number(next.current.href.split("slide")[1])+1 >= 5?1:Number(next.current.href.split("slide")[1])+1)
             })
            }
             next.current.addEventListener('click', slider_next);
             return () => {
                
                next.current.removeEventListener('click', slider_next);
              };
      })
    function sld(){
        return false
    }
    return (
<div className="carousel carousel-center rounded-box w-full gap-20 p-4">
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-black">
      <a href="#slide4" className="bg-gray-200 p-6 w-4 h-4 rounded-full flex justify-center items-center hover:scale-105 transition-all duration-500" id="arrow-left" ref={prev} >❮</a>
      <a href="#slide2" className="bg-gray-200 p-6 w-4 h-4 rounded-full flex justify-center items-center hover:scale-105 transition-all duration-500" id="arrow-right" ref={next}>❯</a>
    </div>
 <section id="slide1">
  <div className="carousel-item justify-center">
  <div className="flex flex-col lg:flex-row w-72 lg:w-[40rem] h-[30rem] lg:h-auto justify-center items-center bg-c_green rounded-xl p-10">
        <div className="w-40">
            <img src="/assets/carousel/Cara Penyajian 1.svg" className="size-full" alt="cara penyajian 1" loading="eager"/>
        </div>
            <div className="flex-col flex w-2/3 ml-0 lg:ml-8 text-white">
                <span className="text-3xl font-bold text-center lg:text-left">Cara Penyajian</span>
                <p className="text-center lg:text-left">Masukkan 1 kantong Metto Slimming Tea atau Metto Senna Leaf Mix HerbaTea dalam gelas atau cangkir.</p>
            </div>
   </div>        
  </div>
  </section>
  <section id="slide2">
  <div className="carousel-item justify-center">
  <div className="flex flex-col lg:flex-row w-72 lg:w-[40rem] h-[30rem] lg:h-auto justify-center items-center bg-c_green rounded-xl p-10">
        <div className="w-40">
            <img src="/assets/carousel/Cara Penyajian 2.svg" className="size-full" alt="cara penyajian 2" loading="eager"/>
        </div>
            <div className="flex-col flex w-2/3 ml-0 lg:ml-8 text-white">
                <span className="text-3xl font-bold text-center lg:text-left">Cara Penyajian</span>
                <p className="text-center lg:text-left">Tuangkan air panas / mendidih 150 mL.</p>
            </div>
   </div>          
  </div>
  </section>
  <section id="slide3">
  <div className="carousel-item justify-center">
  <div className="flex flex-col lg:flex-row w-72 lg:w-[40rem] h-[30rem] lg:h-auto justify-center items-center bg-c_green rounded-xl p-10">
        <div className="w-40">
            <img src="/assets/carousel/Cara Penyajian 3.svg" className="size-full" alt="cara penyajian 3" loading="eager"/>
        </div>
            <div className="flex-col flex w-2/3 ml-0 lg:ml-8 text-white">
                <span className="text-3xl font-bold text-center lg:text-left">Cara Penyajian</span>
                <p className="text-center lg:text-left">Aduk & celup-celupkan kantong teh untuk mendapatkan aroma & warna khas tehnya.</p>
            </div>
   </div>          
  </div>
  </section>
  <section id="slide4">
  <div className="carousel-item justify-center" >
  <div className="flex flex-col lg:flex-row w-72 lg:w-[40rem] h-[30rem] lg:h-auto justify-center items-center bg-c_green rounded-xl p-10">
        <div className="w-40">
            <img src="/assets/carousel/Cara Penyajian 4.svg" className="size-full" alt="cara penyajian 4" loading="eager"/>
        </div>
            <div className="flex-col flex w-2/3 ml-0 lg:ml-8 text-white">
                <span className="text-3xl font-bold text-center lg:text-left">Cara Penyajian</span>
                <p className="text-center lg:text-left">Seduh teh selama 3-5 minutes & sajikan.</p>
            </div>
   </div>          
  </div>
  </section>
</div>
    )
}