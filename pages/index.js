import Head from 'next/head'
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
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);

  useEffect(()=>{

    if(scrollTo){
      if(scrollTo == "about"){
        scr(aboutRef);
      }else if(scrollTo == "project"){
        scr(projectRef);
      }else if(scrollTo == "contact"){
        scr(contactRef);
      }else if(scrollTo == "/"){
        scr(topRef);
      }else{
        return false
      }
    }
  },[scrollTo])


  return (
    <>
        <Cursor/>
        <Nav setScroll={(e)=>{setScrollTo(e)}}/>
        <div ref={topRef}>
          <Header setScroll={(e)=>{setScrollTo(e)}}/>
        </div>
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
