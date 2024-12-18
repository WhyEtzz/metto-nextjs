"use client" 

const { useEffect, useRef } = require("react");


export default function Dotes() {
  
  const cursorref = useRef()
  useEffect(() => {
  const cursor = cursorref.current
  
  
  const positionElement = (e)=> {
    var mouseY = e.pageY;
    var mouseX = e.pageX;
    
    mouseX = mouseX-23;
    mouseY = mouseY-23;
    
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    
  }

  window.addEventListener('mousemove', positionElement);
  window.addEventListener('scroll', positionElement);




 }, []);
 
 function normal() 
 {
     cursorref.width = "50px";
     cursorref.height = "50px";
 }
 function enlarge() 
 {
     cursorref.width = "100px";
     cursorref.height = "100px";
 }
    return (
      <div className="cursor z-50" onMouseDown={enlarge()} onMouseUp={normal()} ref={cursorref}></div>
    )
}