import React, { useEffect, useRef, useState } from 'react'
import Box from '../components/Box'
import { OnScreen } from '../utils/Func';

export default function Nav({setScroll}) {
    const [show,setShow] = useState(false)

  return (
    <nav className='py-6'>
        <Box className={"flex justify-between items-center"}>
            <img src="/assets/logo.svg" alt="logo-hasan" 
            className='w-32 lg:w-36'/>
            <button className='lg:hidden relative z-10' onClick={()=>{setShow(!show)}}>
                <img src="/assets/icons/hamburger.svg" className='h-4'/>
            </button>
            <div className={`fixed flex flex-col inset-x-0 transition-all ${!show ? "-top-full" : "top-0"} pt-24 lg:pt-0 lg:pb-0 lg:border-0 border-b-2 border-b-green pb-10 lg:static lg:block`}>
                <button onBlur={()=>setScroll(null)} onClick={()=>setScroll("about")} className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>About</button>
                <button onBlur={()=>setScroll(null)} onClick={()=>setScroll("project")} className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>Projects</button>
                <button onBlur={()=>setScroll(null)} onClick={()=>setScroll("contact")} className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>Contact</button>
            </div>
        </Box>
    </nav>
  )
}
