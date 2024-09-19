import AboutImage from '../assets/images/about.jpg'
const About = () => {
    return ( 
        <main className="py-5 md:py-10 mt-16 rounded-md shadow-md bg-slate-100">
            <div className="about md:flex justify-between w-11/12 mx-auto ">
                <div className="text md:p-10 md:my-5 md:w-6/12">
                    <h2 className='text-2xl md:text-4xl font-bold my-5 md:my-10'>Who We Are</h2>
                    <p className='text-lg'>
                        Teledom International Limited is a company for IT-based solutions. The customer would enjoy a conglomeration of services from site survey, installation, commissioning to back-up services as a matter of corporate commitment.
                    </p>
                    <button className="p-3 bg-blue-900 text-slate-100 my-10 rounded-md">Read More</button>
                </div>
                <div className="image md:w-6/12">
                    <img src={AboutImage} alt="A Network Engineer" className='shadow-md' />
                </div>
            </div>
           
        </main>
     );
}
 
export default About;