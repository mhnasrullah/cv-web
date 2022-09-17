import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Line from '../components/Line'
import Tilt from 'react-parallax-tilt'


export default function Header({setScroll}) {
  return (
    <section
    className='pt-16'
    >
        <Box className={"md:flex md:items-center"}>

            {/* left section */}
            <div className='md:w-1/2'>
              <Heading
              data-aos="fade-up"
              type={"main"}
              textBlack="Hey, there I'm "
              textGreen={"Hasan."}/>
              <p className='mt-6 leading-[180%]'>As Front-end Web Developer from <br/>Tulungagung, Indonesia</p>
              <div className='mt-10 flex'>
                <Button
                onClick={()=>{setScroll("project")}}
                type={"button"}
                style="solid"
                className={"flex items-center group"}
                >My Projects 
                <img 
                src="/assets/icons/arr.svg"
                className='ml-2 group-hover:translate-x-2 transition-all'/></Button>
                <Button
                onClick={()=>{setScroll("contact")}}
                className={"ml-3"}
                type={"button"}
                style="outline">Contact me</Button>
              </div>
            </div>

            {/* right section */}
            <div className='relative mt-16 md:mt-0 md:w-1/2 md:ml-auto'>
              <Tilt
              transitionSpeed={5000}
              scale={1}
              perspective={1000}>
                <div className='relative lg:w-4/5 lg:ml-auto'>
                  <img src="/assets/images/header.png" alt='hasan-nasrullah-photo' className='w-full'/>
                  <img src="/assets/shapes/header.svg" className='absolute left-8 top-16 w-4/5 lg:left-12 lg:top-28'/>
                </div>
              </Tilt>
            </div>
        </Box>
        <Line className={"mt-16"}/>
    </section>
  )
}
