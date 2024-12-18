"use client" 
const { useEffect, useRef } = require("react");
let form = new URLSearchParams()
const axios = require("axios")
import Swal from 'sweetalert2'



export default function Forms_input({active}) {
const tdr3000 = useRef()
const nama = useRef()
const nomor = useRef()
const email = useRef()
const pesan = useRef()

useEffect(() => {
    
    function postc() {
    form.append('nama', nama.current.value)
    form.append('nomor', nomor.current.value)
    form.append('email', email.current.value)
    form.append('pesan', pesan.current.value)
    
    axios("https://api.metto.id/", {method: "POST", data: form, headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
    }).then(({data}) => {
        Swal.fire({
            title: "Success",
            text: "Pesan Anda Telah Terkirim",
            icon: "success"
          });
    })
    }
     

    tdr3000.current.addEventListener('click', postc);

    return () => {
        tdr3000.current.removeEventListener('click', postc);
       
      };
  });


    return (
        <>
        <div className={'flex flex-col w-full px-2 lg:px-52 py-10 items-start lg:items-center'}>
        <div className={"text-5xl font-bold text-slate-800 p-10" }>
          <h1>Hubungi Kami</h1>
        </div>
        <div className="flex flex-row w-full lg:w-auto p-10">
          <div className="flex justify-center items-center w-10/12 lg:w-1/3 lg:static absolute z-0 overflow-hidden">
            <img src="/assets/contact.png" alt="Image by freepik"/>
          </div>
          <div className="flex flex-col w-11/12 lg:w-2/3 ml-2 lg:ml-5 justify-center z-10 text-black">
            <form className="flex flex-col" method="post" encType="multipart/form-data" >
              <span htmlFor="nama" className="my-2">Nama :</span>
              <input type="text" name="nama" id="nama" ref={nama} placeholder="Masukkan Nama Anda"  className="w-full p-2 rounded-lg focus:border-b-green-950 focus:border-b-2 focus:outline-none transition-all duration-700 bg-white"  />
              <span htmlFor="nomor" className="my-2">Nomor :</span>
              <input type="number" name="nomor" id="nomor" ref={nomor} placeholder="Masukkan Nomor Telepon / Whatsapp Anda"  className="w-full p-2 rounded-lg focus:border-b-green-950 focus:border-b-2 focus:outline-none transition-all duration-700 bg-white" required />
              <span htmlFor="email" className="my-2">Email :</span>
              <input type="email" name="email" id="email" ref={email} placeholder="Masukkan Alamat Email Anda"  className="w-full p-2 rounded-lg focus:border-b-green-950 focus:border-b-2 focus:outline-none transition-all duration-700 bg-white" required />
              <span htmlFor="pesan" className="my-2">Pesan :</span>
              <textarea type="text" name="pesan" id="pesan" ref={pesan} placeholder="Masukkan Pesan Anda"  className="w-full h-24 p-2 rounded-lg focus:border-b-green-950 focus:border-b-2 focus:outline-none transition-all duration-700 form_pesan bg-white" required></textarea>
              <div value="Submit" placeholder="Submit" className="p-3 bg-green-400 hover:bg-green-600 focus:bg-green-950 cursor-pointer my-6 rounded-xl w-full lg:w-1/5 text-white font-bold transition-all duration-700 flex justify-center items-center" ref={tdr3000}> 
                  <span>Submit</span>
                </div>
            </form>
          </div>
        </div>
    </div>
    </>
 
    )
}