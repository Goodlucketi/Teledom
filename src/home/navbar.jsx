import { Link } from 'react-router-dom'
import Logo from '../assets/images/TeledomLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const navToggle = ()=> {
        let navMenu = document.querySelector('.navMenu')
        navMenu.classList.toggle("hidden")  
    }
    return ( 
        <header className='sticky top-0 left-0 z-20 shadow-md bg-slate-100'>
            <nav className="mx-auto w-11/12 py-2 flex justify-between items-center">
                <div className="logo w-5/12 md:w-2/12 p-3">
                    <Link to="/"><img src={Logo} alt="Teledom Logo" className='' /></Link>
                </div>
                <div className="links p-3">
                    <ul className="navMenu list-none hidden absolute bg-slate-100/75 right-0 top-16 p-10 h-screen md:relative md:flex items-center md:h-0 md:top-0 md:bg-transparent">
                        <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/">Home</Link> </li>
                        <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/about">About Us</Link>  </li>
                        <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/solutions">Solutions</Link> </li>
                        {/* <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/portfolio">Port Folio</Link> </li> */}
                        {/* <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/careers">Careers</Link> </li> */}
                        <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/client">Clientele</Link> </li>
                        <li className="p-2 mx-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all"><Link to="/contact">Contact Us</Link> </li>
                    </ul>
                    <div className="menu-bar md:hidden">
                        <MenuIcon onClick={navToggle} fontSize='large' color='primary' />
                    </div>
                </div>
            </nav>
        </header>
       
     );
}
 
export default Navbar;