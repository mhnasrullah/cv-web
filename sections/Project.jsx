import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Heading from '../components/Heading'
import data from "../data/project.json"
import { reverseData, getDetailProject } from '../utils/Func'

export default function Project() {

    const [projects,setProjects] = useState([]);
    const [detail,setDetail] = useState({});
    const [load,setLoad] = useState(2);
    const [show,setShow] = useState(null);
    
    useEffect(()=>{
        setProjects(reverseData(data));
        setDetail(getDetailProject(data,show))
    },[show,data])
    
  return (
    <>
    <section className='py-16'>
        <Box>
            <Heading
            data-aos="fade-up"
            type={"second"}
            textBlack="My "
            textGreen={"Projects."}
            center/>
            <p className='mt-6 leading-[180%] lg:w-1/3 lg:mx-auto text-center'>I have created some projects that you can access it. Some project come from my organization, bussiness, and exploration project. I always make it with enjoy but keep seriously</p>

            <div className='mt-10 md:flex md:flex-wrap'>
                {projects.map((e,i)=>{
                    if(i>=load){
                        return false
                    }else{
                        return (
                            <div key={i} className="md:w-1/2 md:px-2">
                                <button className={"w-full mb-8 relative"} onClick={()=>{setShow(e.id)}}>
                                    <Card
                                    onClick={(e)=>{setShow(e)}}
                                    type={"project"}
                                    img={e.img}
                                    year={e.year}
                                    title={e.title}/>
                                </button>
                            </div>
                        )
                    }
                })}
            </div>

            <div className={`${load >= projects.length ? 'hidden' : 'flex justify-center'}`}>
                <Button type={"button"} onClick={(e)=>{setLoad(load+2)}} style="outline">Load more</Button>
            </div>
        </Box>
    </section>
    {detail ? <Detail show data={detail} onClose={(e)=>{setShow(e)}}/> : false}
    </>
  )
}
