import React, { useEffect, useRef } from 'react'

export default function Cursor() {
    const ref = useRef()
    useEffect(()=>{
      if(ref.current != null){
        window.addEventListener("mousemove",(e)=>{
            ref.current.style.left = e.clientX+"px";
            ref.current.style.top = e.clientY+"px";
        });
      }
    },[])
  return (
    <div ref={ref} style={{
        transitionDuration : 100,
        transformStyle : "ease-out"
    }} className="fixed h-20 w-20 border-2 -translate-x-10 -translate-y-10 z-0 hidden lg:block rounded-full border-black"/>
  )
}
