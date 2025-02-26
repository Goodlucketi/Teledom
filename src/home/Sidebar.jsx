import { Link } from 'react-router-dom'
const sidebarLinks = [
    {name:"Broadband Connectivity Solutions", path: "/solutions/broadband"},
    {name:"Identity Capture & Tracking Solutions", path: "/solutions/capture"},
    {name:"Security Solutions", path: "/solutions/security"},
    {name:"Video Communication Solutions", path: "/solutions/video"},
    {name:"Software and Web Solutions", path: "/solutions/software"},
    {name:"Smart Classroom Solutions", path: "/solutions/smart"},
    {name:"Consultancy Services", path: "/solutions/consult"},
]
const Sidebar = () => {
    return ( 
        <nav className="py-2 sticky top-24 bg-slate-100/90 w-6/12 h-screen">
            <div className="links p-3">
                <ul className={`list-none pt-5 rounded-xl p-3 transition-all duration-500`}>
                    {sidebarLinks.map((link, index)=>(
                        <Link to={link.path}>
                            <li key={index} className="p-3 mx-2 border-b border-slate-800 my-3 md:my-4 font-sans    text-cyan-800 hover:bg-blue-900 rounded-md hover:text-white duration-500 transition-all">
                            {link.name}</li>
                        </Link> 
                    ))}
                </ul>
            </div>
        </nav>
   
       
     );
}
 
export default Sidebar;