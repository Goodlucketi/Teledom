import heroImage from "../assets/images/about33.png"
const AboutHero = () => {
    return ( 
        <header className="about-hero px-10 pt-10  bg-gradient-to-l from-cyan-400 to-blue-700 mb-10">
            <div className="hero mx-auto w-11/12 flex justify-between items-center">
            <div className="title w-5/12">
                <h2 className="text-3xl font-bold text-white">ABOUT US</h2>
            </div>
                <div className="img w-7/12">
                    <img src={heroImage} alt="Lady reading a plan" />
                </div>
            </div>
            
        </header>
     );
}
 
export default AboutHero;