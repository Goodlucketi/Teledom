import AboutHero from "../about/AboutHero";
import AboutText from "../about/AboutText";
import MeetCeo from "../about/meet-ceo";
import Button from "../about/button";
import Footer from "../home/Footer"
const About = () => {
    return ( 
        <main>
            <AboutHero />
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