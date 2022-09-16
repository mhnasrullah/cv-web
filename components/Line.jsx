import React from 'react'
import Box from './Box'

export default function Line({className,box=true}) {
  if(box){
    return (
      <Box className={`${className ? className : ' '} `}><hr className='h-[1px] bg-green opacity-30'/></Box>
    )
  }else{
    return (
      <hr className={`h-[1px] bg-green opacity-30 ${className ? className : ' '}`}/>
    )
  }
}
