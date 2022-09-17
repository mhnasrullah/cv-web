import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Cursor from '../components/Cursor'
import About from '../sections/About'
import Discuss from '../sections/Discuss'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import Nav from '../sections/Nav'
import Project from '../sections/Project'
import Skill from '../sections/Skill'
import { scrollTo as scr } from '../utils/Func'

export default function Home() {
  const [scrollTo,setScrollTo] = useState(null)
  const [pos,setPos] = useState({
    clientX : 0,
    clientY : 0
  })
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      setPos({clientX : e.clientX, clientY : e.clientY})
      console.log()
    });

    if(scrollTo){
      if(scrollTo == "about"){
        scr(aboutRef);
      }else if(scrollTo == "project"){
        scr(projectRef);
      }else if(scrollTo == "contact"){
        scr(contactRef);
      }else{
        false;
      }
    }
  },[scrollTo])

  return (
    <>
      <Cursor/>
      <Nav setScroll={(e)=>{setScrollTo(e)}}/>
      <Header setScroll={(e)=>{setScrollTo(e)}}/>
      <div ref={aboutRef}>
        <About/>
      </div>
      <Skill/>
      <div ref={projectRef}>
        <Project/>
      </div>
      <div ref={contactRef}>
        <Discuss/>
      </div>
      <Footer/>
    </>
  )
}
