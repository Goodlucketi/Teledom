import Broadband from '../assets/images/broadband.png'
import capture from '../assets/images/capture.jpg'
import security from '../assets/images/security.jpg'
import software from '../assets/images/software.jpg'
import SmartClass from '../assets/images/Smart-classroom.png'
import video from '../assets/images/video.jpg'
import smartId from '../assets/images/smartId.jpeg'
import dataCenter from '../assets/images/datacenter.jpeg'
import snos from '../assets/images/snos_flyer.png'

const Services = () => {
    return ( 
        <main className='w-11/12 mx-auto'>
            <h2 className='text-center text-2xl md:text-4xl font-bold my-5 md:my-10'>What We Do</h2>
            <div className="services grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                <div className="service shadow-md rounded-md relative">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Broadband Connectivity</h3>
                    </div>
                    <div className="img">
                        <img src={Broadband} alt="service-image" className="w-3/6 mx-auto rounded-md h-40  object-cover border-2"/>
                    </div>
                    <div className="text p-4 text-center">
                        <p className="font-sans text-left">
                        Our Broadband solutions comes with the capacity to simultaneously transport bandthwidth-intensive multiple data types: These includes Wireless Connectivity, Fiber optics, VSAT, LAN /MAN/WAN
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md relative">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Identity Capture & Tracking</h3>
                    </div>
                    <div className="img">
                        <img src={capture} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 object-cover"/>
                    </div>
                    <div className="text p-4 text-center">
                        <p className="font-sans text-left">
                            Facial detection via video in poor lighting conditions with multiple faces in frame, moving subjects, and complex backgrounds, Detection of multiple faces in a single frame.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>

                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Security Solutions</h3>
                    </div>
                    <div className="img">
                        <img src={security} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 object-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            Control of access to your homes, offices, factories, store houses, laboratories etc. When you install Access Control Solution, you ensure privacy, security and peace of mind. Without an Access Control System, you are insecure.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Video Conferencing</h3>
                    </div>
                    <div className="img">
                        <img src={video} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 object-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            Do you know that 55% of effective communication is determined by nonverbal skills such as gestures, eye contact, posture, and even the tone of voice? Then consider how many of these non-verbal attributes and details get lost every day...
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Software and Web</h3>
                    </div>
                    <div className="img">
                        <img src={software} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 object-cover"/>
                    </div>
                    <div className="text p-4 text-center">
                        <p className="font-sans text-left">
                            Your business is a dynamic, evolving organization, therefore your software should adapt and grow with your company as well and not remain static. We have the expertise to give you cutting-edge web & software solutions.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Smart Classroom</h3>
                    </div>
                    <div className="img">
                        <img src={SmartClass} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 object-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            Today's classrooms requires a flexible set of tools to inspire extarordinary classroom experiences and improve learning outcomes. Discover how we can help you enhance whole-class, small-group and individualized learning.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Smart ID</h3>
                    </div>
                    <div className="img">
                        <img src={smartId} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 objet-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            Personnel & Student Identity Card System (PERSIDS) is a robust smart identity card software solution that enables you to generate, print and encode high security, professional ID cards.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Data Center & Power Supply</h3>
                    </div>
                    <div className="img">
                        <img src={dataCenter} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 objet-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            A data centre is a dedicated space where companies can keep and operate most of the ICT infrastructure that supports their business. This would be the servers and storage.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                <div className="service shadow-md rounded-md">
                    <div className="title my-2">
                        <h3 className="py-5 bg-blue-900 text-white text-center rounded-t-md">Security Network Operating System</h3>
                    </div>
                    <div className="img">
                        <img src={snos} alt="service-image" className="w-3/6 mx-auto rounded-md h-40 objet-cover"/>
                    </div>
                    <div className="text text-center p-4">
                        <p className="font-sans text-left">
                            SNOS senses and monitors wherever and whatever you want. SNOS sends you, by SMS and e-mail, the security state of your Locations of Treasure, Objects of Treasure and Points of Treasure.
                        </p>
                        <button className="bg-blue-700 py-2 px-3 text-white rounded-md my-5">Learn More</button>
                    </div>
                </div>
                
            </div>
        </main>
     );
}
 
export default Services;