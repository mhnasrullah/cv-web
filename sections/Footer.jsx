import React from 'react'
import Box from '../components/Box'
import Heading from '../components/Heading'
import Line from '../components/Line'

export default function Footer() {
  return (
    <footer className='pt-16'>
        <Box>
            <div className='md:flex md:justify-between'>
                <Heading
                center
                type={"main"}
                textBlack="Thank"
                textGreen={"you."}/>
                <p className='leading-[180%] text-justify mt-6 md:ml-8 md:mt-0 lg:w-1/3 lg:mt-8'>Thankyou for your coming on my page and your time for me. let’s enjoy with our activity. If this page is usefull, you can share to everyone that you want</p>
            </div>
            <div className='flex items-center mt-16 mb-8'>
                <Line box={false} className="w-1/5 lg:w-2/6"/>
                <p className='w-3/5 lg:w-2/6 text-center'>Design and Develop by <span className='font-semibold'>Muhammad Hasan Nasrullah</span></p>
                <Line box={false} className="w-1/5 lg:w-2/6"/>
            </div>
        </Box>
    </footer>
  )
}
