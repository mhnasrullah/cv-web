import React, { useEffect,useState } from 'react'
import Box from '../components/Box'

export default function Nav({setScroll, ...props}) {
    const [show,setShow] = useState(false)
    const [bg,setBg] = useState(false)

    useEffect(()=>{
        window.onscroll = () =>{
            if(window.scrollY > 20){
                setBg(true)
            }else{
                setBg(false)
            }
        }
    },[])


  return (
    <nav className={`py-6 fixed z-50 w-full ${bg? 'bg-white' : 'bg-trans'}`} {...props}>
        <Box className={"flex justify-between items-center"}>
            <button onBlur={()=>setScroll(null)} onClick={()=>setScroll("/")}>
                <img src="/assets/logo.svg" alt="logo-hasan" 
                className='w-32 lg:w-36 relative z-10'/>
            </button>
            <button className='lg:hidden relative z-10' onClick={()=>{setShow(!show)}}>
                <img src="/assets/icons/hamburger.svg" className='h-4'/>
            </button>
            <div className={`fixed flex flex-col inset-x-0 transition-all ${!show ? "-top-full" : "top-0"} pt-24 bg-white lg:bg-trans lg:pt-0 lg:pb-0 lg:border-0 border-b-2 border-b-green pb-10 lg:static lg:block`}>
                <button onBlur={()=>setScroll(null)}
                onClick={()=>{
                    setShow(false);
                    setScroll("about")}}
                className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>About</button>
                <button onBlur={()=>setScroll(null)}
                onClick={()=>{
                    setShow(false);
                    setScroll("project")}}
                className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>Projects</button>
                <button onBlur={()=>{
                    setShow(false);
                    setScroll(null)}}
                onClick={()=>{
                    setShow(false);
                    setScroll("contact")}}
                className='text-lg relative lg:text-base lg:ml-16 my-3 hover:scale-110 transition-all'>Contact</button>
            </div>
        </Box>
    </nav>
  )
}
