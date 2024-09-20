import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navToggle = ()=> {
        setIsOpen(!isOpen)
    }
    
    return ( 
        <nav className="py-2 fixed top-10 z-20 md:-right-0 md:w-4/12">
            {/* Links */}
            <div className="links p-3">
                <ul className={`${isOpen ? ('block'): ('hidden')} list-none bg-slate-100/90 pt-16 rounded-xl p-3 transition-all duration-500 ease-in-out h-screen`}>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/broadband">Broadband Connectivity Solutions</Link> 
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/capture">Identity Capture & Tracking Solutions</Link>  
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/security">Security Solutions</Link> 
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/video">Video Communication Solutions</Link> 
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/software">Software and Web Solutions</Link> 
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/smart">Smart Classroom Solutions</Link> 
                    </li>
                    <li className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans text-lg text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                        <Link to="/consult">Consultancy Services</Link> 
                    </li>
                </ul>
                <div className="menu-bar absolute top-10 md:right-10">
                    {isOpen ? (
                        <CloseIcon onClick={navToggle} fontSize='large' color='secondary' />
                    ) : (
                        <MenuIcon onClick={navToggle} fontSize='large' color='primary' />
                    )}
                    
                </div>
            </div>
        </nav>
   
       
     );
}
 
export default Sidebar;