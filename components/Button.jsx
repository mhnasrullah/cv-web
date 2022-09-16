import React from 'react'

export default function Button({type,className,children,style,href,onClick,textOnly}) {

    let stl = ' ';

    if(style === "solid"){
        stl = "bg-blue border-2 border-blue text-white"
    }

    if(style === "outline"){
        stl = "border-black border-2 text-black bg-trans"
    }

    if(type === "button"){
        return (
          <button onClick={onClick} className={`${className ? className : ' '} py-2 px-5 rounded-full ${stl}`}>{children}</button>
        )
    }

    if(type === "anchor"){
        if(textOnly){
            return(
                <a href={href} rel="noopener noreferrer" target="_blank" className={`${className ? className : ' '} ${stl}`}>{children}</a>
            )
        }else{
            return(
                <a href={href} rel="noopener noreferrer" target="_blank" className={`${className ? className : ' '} py-2 px-5 rounded-full ${stl}`}>{children}</a>
            )
        }
    }
}
