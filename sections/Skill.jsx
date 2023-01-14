import React from 'react'
import Box from '../components/Box'
import Heading from '../components/Heading'
import Line from '../components/Line';

export default function Skill() {
    const skill = ['fig','rec','nxt','tlw','ts'];

  return (
    <section>
        <Box>
            <Heading
            data-aos="fade-up"
            type={"second"}
            textBlack="My "
            textGreen={"Skill On."}
            center/>
            <p className='text-center'>Most technology that i have tried</p>
            <div className='flex flex-wrap justify-center mt-10'>
                {skill.map((e,i)=>(
                    <img src={`/assets/images/${e}.png`} className="h-10 md:h-14 lg:h-16 lg:mx-16 mb-6 mx-6" key={i}/>
                ))}
            </div>
        </Box>
        <Line className={"mt-16"}/>
    </section>
  )
}
