import 'animate.css'
const AboutHero = ({title, image}) => {
    return ( 
        <header className="about-hero px-5 md:pl-20 pt-5 md:pt-10 relative  bg-gradient-to-l from-cyan-400 to-blue-700 mb-5">
            <div className="hero mx-auto w-11/12 flex justify-between items-center">
            <div className="title md:w-5/12">
                <h2 className="animate__animated animate__backInLeft animate__slow text-lg md:text-3xl font-bold text-white">{title}</h2>
            </div>
                <div className="abthero-img ">
                    <img src={image} alt="Lady reading a plan"/>
                </div>
            </div>
            
        </header>
     );
}
 
export default AboutHero;