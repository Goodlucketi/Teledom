import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons';
const Footer = () => {
    return ( 
        <footer className='pt-10'>
            <div className="w-11/12 mx-auto p-5 md:flex justify-between">
                <div className="links my-5">
                    <h3 className="font-bold text-xl underline">Links</h3>
                    <ul className="list-none">
                        <li className="hover:underline"><Link to="/">Home</Link> </li>
                        <li className="hover:underline"><Link to="/about">About Us</Link>  </li>
                        <li className="hover:underline"><Link to="/solutions">Solutions</Link> </li>
                        <li className="hover:underline"><Link to="/portfolio">Port Folio</Link> </li>
                        <li className="hover:underline"><Link to="/careers">Careers</Link> </li>
                        <li className="hover:underline"><Link to="/client">Clientele</Link> </li>
                        <li className="hover:underline"><Link to="/contact">Contact Us</Link> </li>
                    </ul>
                </div>

                <div className="social-contact my-5">
                    <h3 className="font-bold text-xl underline">Contact</h3>
                    <SocialIcons />
                </div>

                <div className="newsletter md:w-4/12">
                    <p className='my-2'>Subscribe to our Newsletter</p>
                    <div className="relative newsletter-form">
                        <input type="email" name="email" id="email_newsletter" className="p-2 border-2 w-full rounded-md" placeholder="Email Address"/>
                        <input type="submit" value="Submit" className='absolute top-0.5 right-0.5 bg-blue-700 text-white rounded-md py-2 px-4' />
                    </div>
                    
                </div>
            </div>
            <p className='text-center text-xs md:text-md font-mono bg-slate-600 p-2'>&copy; 1998 - 2024 Teledom International Limited. All rights reserved.</p>
        </footer>
     );
}
 
export default Footer;