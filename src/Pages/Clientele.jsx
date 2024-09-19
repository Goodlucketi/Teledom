import AboutHero from "../about/AboutHero";
import SolutionsTxt from "../solutions/SolutionsTxt";
import OurClients from "../clients/OurClient";
import Footer from "../home/Footer";
import clienteleImg from "../assets/images/clients.png"
import Sidebar from "../home/Sidebar"

const Clientele = () => {
    return ( 
        <main>
            <AboutHero title={'Clientele'} image={clienteleImg} />
            <Sidebar />
            <SolutionsTxt text={'We have the privilege of working with some of the most well known companies and government parastatals in Nigeria. Our clients engage us in a number of ways—from Network solutions, Smart class-room, e-library and Security solutions to consultancy. We view our clients as partners and work collaboratively with them to achieve results they can measure.'} />
            <OurClients />
            <Footer />
        </main>
     );
}
 
export default Clientele;