import React from 'react'

export default function Card({type,img,title,year,className}) {
    if(type === "project"){
        return (
            <div>
                <img src={img} className="w-full h-60 lg:h-96 object-cover object-center rounded-lg"/>
                <h2 className='font-semibold text-xl text-start ml-4 mt-4'>{title}</h2>
                <p className='text-start ml-4'>{year}</p>
                <hr className='h-[1px] bg-green opacity-30 mt-3'/>
            </div>
        )
    }
}
