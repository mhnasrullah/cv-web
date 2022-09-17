import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Line from '../components/Line'

export default function About() {
  return (
    <section className='pt-16'>
        <Box>
            <Heading
            data-aos="fade-up"
            type={"second"}
            textBlack="About "
            textGreen="Me."
            center/>
            <p className='text-justify mt-6 lg:w-1/2 lg:mx-auto leading-[180%]'>
            Hi! <span className='font-semibold'>I'm Hasan Nasrullah</span>, an undergradute <span className='font-semibold'>student of Information Technology in Brawijaya University</span>. I am interesting to learn about web technology and finding something new there. I also interesting on graphic design because I like about art. I like to try new experience to challenging myself to be better
            </p>
            <div className='flex justify-center mt-8'>
                <Button
                type={"anchor"}
                href="google.com"
                style="solid"
                >Download Curriculum Vitae</Button>
            </div>
        </Box>
        <Line className={"my-16"}/>
    </section>
  )
}
