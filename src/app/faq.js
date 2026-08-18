"use client"
import _ from "lodash";
import Forms_input from "./form";
const {useRef, useEffect, useState, } = require("react")


const obj = [
    {
        q: "Apakah Kandungan Metto Sesuai Hasil Uji Lab ?",
        a: <p>Metto rutin melakukan protokol uji lab rutin untuk memastikan kandungan komposisi akurat, sesuai dengan label kemasan.</p>
    },
    {
        q: "Metto Bisa Turunkan Berat Badan ?",
        a: <><p>Metto tidak pernah mengklaim bisa menurunkan berat badan secara instan.</p><p>Namun Metto telah terbukti bisa membantu banyak konsumen kami untuk menurunkan berat badan diimbangi hidup sehat dan pola makan sehat. Penurunan berat badan yang dialami mereka terjadi secara natural dalam jangka panjang, bukan jangka pendek.</p>    </>
    },
    {
        q:"Minum Metto Intensitas BAB Bertambah ?",
        a:<p>Efek Metto bisa meningkatkan frekuensi BAB secara aman dan alami.</p>
    },
    {
        q: "Cara Cek Keaslian Metto ?",
        a: <p>Silahkan buka <strong><a href="https://greenlife.co.id/panduan-scan-qr-original/" target="_blank">https://greenlife.co.id/panduan-scan-qr-original/</a></strong> dan ikuti step by step di halaman tersebut.</p>
    },
    {
        q: "Aturan pakai Metto ?",
        a: <><p><strong>Aturan Minum Metto Senna Leaf Mix Herba :</strong><br/>Minum Metto Senna Leaf 2x sehari, 30 menit setelah makan pagi dan makan malam<br/><strong>Aturan Minum Metto Slimming Tea :</strong><br/>Minum Metto Slimming Tea 2x sehari, 30 menit setelah makan pagi dan makan malam<br/><strong>OPTIMALKAN PROGRAM TURUNKAN OBESITAS DENGAN MINUM :</strong><br/></p><ul className="marker:text-green-600 list-disc pl-5"><li>Metto senna leaf diminum 1x sehari, 30 menit setelah makan malam</li><li>Metto slimming tea diminum 2x sehari, 30 menit setelah makan pagi dan makan siang</li></ul><p></p></>
    },
    {
        q: "Apakah Metto Aman Untuk Penderita Maag Atau Asam Lambung ?",
        a: <><p><strong>Metto Slimming Tea</strong>: Aman</p><p><strong>Metto Senna Leaf Mix herba</strong> : Tidak disarankan dikonsumsi bagi penderita lambung.</p></>
    }
]
let key = 0
export default function FAQ() {
    //const form_btn = useRef()
    const formed = useRef()
    let rs = false
    const [isContainerActive, setIsContainerActive] = useState(false);
    const setinactive = () => {
      rs = false
      formed.current.style.display = "none"
      formed.current.classList.remove("formm")
       return setIsContainerActive(false);
    };  
    const setactive = () => {
      rs = true
      formed.current.style.display = "block"
      formed.current.classList.add("formm")
      return setIsContainerActive(true);
    };

    
    
    /*useEffect(() => {
      
      function formview() {
        if (isContainerActive) {
          setinactive()
        } else {
          setactive()
        }
      }
       
  
      form_btn.current.addEventListener('click', formview);
  
      return () => {
          form_btn.current.removeEventListener('click', formview);
         
        };
    });*/

    return (
        <>
        <div className="flex flex-col w-full px-10 lg:px-52 py-10 items-center bg-zinc-50">
    <div className="text-5xl font-bold text-slate-800 p-10">
      <h1>FAQ</h1>
    </div>

  <div className="flex flex-col gap-5">
  {obj.map(item => (
    <div className="collapse collapse-arrow border border-green-700 text-black hover:text-white hover:border-green-700 hover:shadow-lg hover:bg-green-700 duration-500 transition-all" key={key++}>
    <input type="checkbox" />
    <div className="collapse-title font-bold">{item.q}</div>
    <div className="collapse-content">
      {item.a}
    </div>
  </div>
  ))}
  </div>
  <div className="flex flex-col lg:flex-row justify-end items-center w-full my-5 gap-3">
    <span className="text-black font-bold text-lg">Info lebih lengkap hubungi :</span>
  <div className="flex flex-row justify-end gap-5">
    {isContainerActive? <div className="flex justify-center items-center text-center text-white px-10 py-6 bg-c_green rounded-xl w-36 h-5 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500 select-none" role="button" onClick={() => setinactive()}>FORM</div> : <div className="flex justify-center items-center text-center text-white px-10 py-6 bg-c_green rounded-xl w-36 h-5 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500 select-none" role="button" onClick={() => setactive()}>FORM</div>}
    <div className="flex justify-center items-center text-center text-white px-10 py-6 bg-c_green rounded-xl w-36 h-10 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500 select-none"><a href="https://wa.me/6285117613148" target="_blank">WHATSAPP</a></div>
  </div>
  </div>
    </div>
    <div ref={formed} style={{display: "none"}} className="bg-slate-50">
    <Forms_input/>
    </div>
  
  </>
    )
}
