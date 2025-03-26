import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Logo from '../assets/images/TeledomLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navToggle = ()=> {
        setIsOpen(!isOpen)        
    }

    useEffect(()=>{
        setIsOpen(false);
    }, [location])
    
    return ( 
        <header className='sticky top-0 left-0 z-20 shadow-md bg-slate-100'>
            <nav className="mx-auto w-11/12 py-2 flex justify-between items-center">
                <div className="logo w-5/12 md:w-2/12 p-3">
                    <NavLink to="/">
                        <img src={Logo} alt="Teledom Logo" className='' />
                    </NavLink>
                </div>

                {/* Links */}
                <div className="links p-3">
                    <ul className={`${isOpen ? ('block'): ('hidden')} navMenu w-4/6 md:w-full list-none absolute bg-slate-100 right-0 top-16 p-10 md:p-5 h-screen md:relative md:flex items-center md:h-0 md:top-0 md:bg-transparent transition-all duration-500 ease-in-out md:block`}>
                        <NavLink to="/" className={({isActive})=>`py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 rounded-md hover:text-white duration-500 transition-all ${isActive ? "bg-blue-800 text-white":"text-cyan-700 hover:bg-blue-900"}`}><li >Home</li></NavLink> 
                        
                        <NavLink to="/about" className={({isActive})=>`py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 rounded-md hover:text-white duration-500 transition-all ${isActive ? "bg-blue-800 text-white":"text-cyan-700 hover:bg-blue-900"}`}><li>About Us</li></NavLink>  
                        
                        <NavLink to="/solutions" className={({isActive})=>`py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 rounded-md hover:text-white duration-500 transition-all ${isActive ? "bg-blue-800 text-white":"text-cyan-700 hover:bg-blue-900"}`}><li>Solutions</li></NavLink> 
                        {/* <li className="py-2 px-4 mx-2 my-10 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><NavLink to="/portfolio">Port Folio</NavLink> </li> */}
                        {/* <li className="py-2 px-4 mx-2 my-10 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><NavLink to="/careers">Careers</NavLink> </li> */}
                        
                        <NavLink to="/client" className={({isActive})=>`py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 rounded-md hover:text-white duration-500 transition-all ${isActive ? "bg-blue-800 text-white":"text-cyan-700 hover:bg-blue-900"}`}><li>Clientele</li></NavLink> 
                        
                        <NavLink to="/contact" className={({isActive})=>`py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 rounded-md hover:text-white duration-500 transition-all ${isActive ? "bg-blue-800 text-white":"text-cyan-700 hover:bg-blue-900"}`}><li>Contact Us</li></NavLink> 
                    </ul>
                    <div className="menu-bar md:hidden">
                        {isOpen ? (
                            <CloseIcon onClick={navToggle} fontSize='large' color='primary' />
                        ) : (
                            <MenuIcon onClick={navToggle} fontSize='large' color='primary' />
                        )}
                        
                    </div>
                </div>
            </nav>
        </header>
       
     );
}
 
export default Navbar;