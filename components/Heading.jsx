import React from 'react'

export default function Heading({type,textBlack,textGreen,className,center}) {
  if(type=="main"){
    return(
        <h1 className={`${className ? className : ' '} font-basker text-5xl leading-[125%] lg:leading-[130%] lg:text-8xl font-bold`}>{textBlack} <span className='text-green'>{textGreen}</span></h1>
    )
  }

  if(type=="second"){
    return(
      <h1 className={`${className ? className : ' '} font-basker text-4xl leading-[125%] lg:leading-[130%] lg:text-6xl font-bold ${center ? 'text-center' : ' '}`}>{textBlack}<span className='text-green'>{textGreen}</span></h1>
    )
  }
}
