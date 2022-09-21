import React from 'react'
import Box from './Box'
import Button from './Button';
import Line from './Line';

export default function Detail({data,onClose,show}) {
    const {title,img,year,tech,story,link} = data;
  return (
    <div className={`${show ? 'fixed z-50 inset-0 bg-[#FFFFFF88]' : 'hidden'}`}>
        <Box className={"flex items-center h-screen"}>
            <div className='bg-white w-full rounded-lg shadow-md px-2 md:px-4 pt-12 pb-4 relative'>
                <div className='max-h-[75vh] overflow-y-auto'>
                    <h2 className='font-semibold text-2xl lg:text-4xl text-start mb-3 md:my-6 lg:px-6'>{title}</h2>
                    <div className='md:flex lg:px-6'>
                        <img src={img} className="w-full rounded-lg md:w-1/2 md:h-fit" alt={title}/>
                        <div className='mt-12 md:mt-6 md:w-1/2 md:ml-5 lg:ml-8'>
                            <div>
                                <h2 className='font-semibold text-xl text-start mb-2'>Technology</h2>
                                <div className='flex flex-wrap pl-5 gap-5 mt-3'>
                                    {tech && (
                                        tech.map((e,i)=>(
                                            <img src={`/assets/images/${e}.png`} className="h-6" key={i} />
                                        ))
                                    )}
                                </div>
                                <Line box={false} className="mt-6"/>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-end'>
                                    <h2 className='font-semibold text-xl text-start'>Year</h2>
                                    <p className='ml-6'>{year}</p>
                                </div>
                                <Line box={false} className="mt-6"/>
                            </div>
                            <div className='mt-6'>
                                <h2 className='font-semibold text-xl text-start mb-2'>Story</h2>
                                <p className='leading-[180%]'>{story}</p>
                                <Line box={false} className="mt-6"/>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-end flex-wrap'>
                                    <h2 className='font-semibold text-xl text-start'>Link</h2>
                                    <Button type={"anchor"} textOnly className='ml-6' href={link}>{link}</Button>
                                </div>
                                <Line box={false} className="mt-6"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='absolute top-4 right-4' onClick={()=>{onClose(null)}}>
                    <img src="/assets/icons/x.svg" className='h-3 md:h-5'/>
                </button>
            </div>
        </Box>
    </div>
  )
}
