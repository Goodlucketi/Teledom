import AboutHero from "../about/AboutHero";
import AboutText from "../about/AboutText";
import MeetCeo from "../about/meet-ceo";
import Button from "../about/button";
import Footer from "../home/Footer"
import heroImage from "../assets/images/about33.png"
import Sidebar from "../home/Sidebar"

const About = () => {
    return ( 
        <main>
            <AboutHero title={'About Us'} image={heroImage}/>
            <Sidebar />
            <AboutText />
            <MeetCeo />
            <div className="moreInfo p-10 text-center text-white shadow-md bg-white my-10">
                <Button link={''} text={'Download Brochure'} />
                <Button link={''} text={'Visit IT Mart Website'} />
            </div>
            <Footer />
        </main>
     );
}
 
export default About;