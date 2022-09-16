import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Line from '../components/Line'
import data from "../data/social.json"

export default function Discuss() {
    const [social,setSocial] = useState([])

    useEffect(()=>{
        setSocial(data)
    },[])
  return (
    <>
        <section className='py-16'>
            <Box>
                <Heading
                center
                type={"second"}
                textBlack="Let's "
                textGreen={"Discuss."}/>
                <p className="text-center">You can reach me on my social media</p>
                <div className='flex justify-center mt-6'>
                    {social.map((e,i)=>(
                        <div key={i} className="px-3">
                            <Button type={"anchor"} href={e.link} textOnly>
                                <img src={`/assets/icons/${e.icons}`} className="h-10"/>
                            </Button>
                        </div>
                    ))}
                </div>
            </Box>
        </section>
        <Line />
    </>
  )
}
