import { useEffect, useState } from "react"
export const onScreen = () => {
    if(window.innerWidth <768){
        return "sm"
    }else if(window.innerWidth < 992){
        return "md"
    }else{
        return 'lg'
    }
}

export const reverseData = (data) => {
    return data.sort((a, b) => b.id-a.id)
}

export const getDetailProject = (data = [], id) => {
    return data.filter((e) => (e.id == id))[0];
}

export const scrollTo = (ref) =>{
    window.scrollTo({
        behavior : "smooth",
        top : ref.current.offsetTop-40
    });
}