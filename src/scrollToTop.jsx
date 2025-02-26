import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(()=>{
        if (pathname.startsWith('/solutions')) return
        window.scroll(0,0)
    }, [pathname])
    
    return null;
}
 
export default scrollToTop;