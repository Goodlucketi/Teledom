import AboutHero from "../about/AboutHero";
import SolutionsImg from "../assets/images/about22.png"
import SolutionsTxt from "../solutions/SolutionsTxt";
import Footer from "../home/Footer";
import Sidebar from "../home/Sidebar"
import { Outlet } from "react-router-dom";

const Solutions = () => {
    return ( 
        <main>
            <AboutHero title={'Our Solutions'} image={SolutionsImg} />
            <div className="flex">
                <Sidebar />
                <div className="solutions-content overflow-y-scroll h-screen ">
                    <SolutionsTxt text={'Teledom International Limited is a company for ICT-based solutions. The customer would enjoy a conglomeration of services from site survey, installation, commissioning to back-up services as a matter of corporate commitment detailed out in our Technical Services Agreement (TSA). Check up the service you require from our range of solutions and give us a call.'} />

                    <Outlet />
                </div>
               
            </div>
           
            <Footer />
        </main>
     );
}
 
export default Solutions;