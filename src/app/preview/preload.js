"use client"
import {useEffect, useRef} from "react";

export default function Preloading() {
    const pre = useRef()
    useEffect(() => {
        pre.current.classList.remove("flex")
        pre.current.classList.add("hidden")
      }, []);
    
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-white z-[999] sticky top-0" ref={pre}>
            <img src="/assets/Animation.gif" alt="loading"/>
        </div>
    )
}
