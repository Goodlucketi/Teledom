import { Link, useLocation } from 'react-router-dom'
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
                    <Link to="/">
                        <img src={Logo} alt="Teledom Logo" className='' />
                    </Link>
                </div>

                {/* Links */}
                <div className="links p-3">
                    <ul className={`${isOpen ? ('block'): ('hidden')} navMenu w-4/6 md:w-full list-none absolute bg-slate-100 right-0 top-16 p-10 md:p-5 h-screen md:relative md:flex items-center md:h-0 md:top-0 md:bg-transparent transition-all duration-500 ease-in-out md:block`}>
                        <li className="py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/">Home</Link> </li>
                        <li className="py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/about">About Us</Link>  </li>
                        <li className="py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/solutions">Solutions</Link> </li>
                        {/* <li className="py-2 px-4 mx-2 my-10 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/portfolio">Port Folio</Link> </li> */}
                        {/* <li className="py-2 px-4 mx-2 my-10 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/careers">Careers</Link> </li> */}
                        <li className="py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/client">Clientele</Link> </li>
                        <li className="py-2 px-4 mx-2 my-6 font-mono text-lg text-cyan-700 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/contact">Contact Us</Link> </li>
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