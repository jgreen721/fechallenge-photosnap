import {useState,useEffect} from "react"



export const useObserver=(ref)=>{
    const [inView,setInView] = useState(false);
    
    const showEl=(e)=>{
        // console.log(e[0])
        if(e[0].isIntersecting){
        // console.log("show element!!!",e[0]);
        setInView(true);
        observer.unobserve(ref.current);
        }
    }

    const observer = new IntersectionObserver(showEl);

    useEffect(()=>{
        if(ref.current){
        observer.observe(ref.current);
        }
    },[ref])

    return {inView}
}