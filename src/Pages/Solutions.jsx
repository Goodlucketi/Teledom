import AboutHero from "../about/AboutHero";
import SolutionsImg from "../assets/images/about11.png"
import SolutionsTxt from "../solutions/SolutionsTxt";
import SolnContent from "../solutions/SolnContent";
import Footer from "../home/Footer";
const Solutions = () => {
    return ( 
        <main>
            <AboutHero title={'Our Solutions'} image={SolutionsImg} />
            <SolutionsTxt />
            <div className="mx-auto w-11/12 p-4 md:grid md:grid-cols-3 md:gap-10 ">
                <SolnContent 
                    title={"Broadband connectivity solutions"}
                    feature1={'Wireless Connectivity'}
                    feature2={'Fiber optics'}
                    feature3={'VSAT'}
                    feature4={'LAN /MAN/WAN'}
                    feature5={'Visible Light Systems'}
                 />
                 <SolnContent 
                    title={"Video communications solutions"}
                    feature1={'Video conferencing'}
                    feature2={'Distance Learning'}
                    feature3={'Telemedicine | Tele-health'}
                    feature4={'Telepresence'}
                 />
                 <SolnContent 
                    title={"Security Solutions"}
                    feature1={'Bulk Scanning'}
                    feature2={'IP Surveillance'}
                    feature3={'Access Control'}
                    feature4={'SNOS (Security Network Operation System)'}
                    feature5={'Smart Identities cards and cord readers'}
                    feature6={'Firegate'}
                 />

                <SolnContent 
                    title={"Identity Capture & Tracking Solution"}
                    feature1={'Identity Recognition'}
                    feature2={'Facial Detection'}
                    feature3={'Personnel & Student Smart Identity System (PERIDS)'}
                    feature4={'Smart Identification system for schools, offices and government establishments'}
                    feature5={'Smart Identities cards and cord readers'}
                /> 
                <SolnContent 
                    title={"Smart classroom solutions"}
                    feature1={'Nursery and primary Schools'}
                    feature2={'Secondary Schools'}
                    feature3={'Tertiary Institutions'}
                    feature4={'Training Centres'}
                /> 
                <SolnContent 
                    title={"Software & WeB Solutions"}
                    feature1={'Software development'}
                    feature2={'Responsive website designs & development'}
                    feature3={'MobileApp development for Android, Windows & iOS'}
                /> 
                <SolnContent 
                    title={"Smart Solutions"}
                    feature1={'Internet of Things (IOT)'}
                    feature2={'Smart Homes, Buildings, Towns, Cities'}
                    feature3={'Smart Hospitals, Campuses, Hotels'}
                    feature4={'Smart National Security Operations'}
                />
                <SolnContent 
                    title={"Consultancy Services"}
                    feature1={'Project Management'}
                    feature2={'Solutions Design'}
                    feature3={'Quality Audit'}
                    feature4={'Site Survey'}
                />
            </div>
            <Footer />
        </main>
     );
}
 
export default Solutions;