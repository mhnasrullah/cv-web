export const OnScreen = () => {
    if(window.innerWidth <768){
        return "sm"
    }else if(window.innerWidth < 992){
        return "md"
    }else{
        return 'lg'
    }
}