import DrEkuwem from "../assets/images/Dr_Ekuwem22.png"
const AboutText = () => {
    return ( 
        <main className="p-4">
            <div className="w-11/12 p-2 mx-auto">
                <div className="mission_statement shadow-md bg-white p-10">
                    <p className="md:text-lg">
                        Teledom International Limited, RC: 337366 is fully incorporated in Nigeria with the Corporate Affairs Commission Abuja to carry out the business of Information and Communication Technology (ICT) facilities provisioning within and outside Nigeria. Teledom International is a member of Teledom Group. The Group also has WebInn Limited and Technology Development Company Limited both which offer other specialized ICT-based services while IT MART (Resources) Limited, which is a One-Stop Infotech Superstore.
                    </p>

                    <h3 className="mt-7 py-2 font-bold text-xl text-blue-900">Mission Statement</h3>
                    <p className="md:text-lg">
                        To automate every socio-economic process using Broadband Information and Communications Technology (ICT) infrastructures and multimedia facilities with appropriate content solutions to boost national economic productivity and prosperity.
                    </p>
                </div>

                <div className="uniqueness shadow-md bg-white p-10 my-10">
                    <p className="md:text-lg font-bold">The most prefered ICT solution provider with a digital A+ rating from its clients</p>

                    <ul className="list-disc px-10 md:text-lg my-5">
                        <li>Nigerian Communications Commission (NCC)</li>
                        <li>National Information Technology Development (NITDA)</li>
                        <li> Central Bank of Nigeria</li>
                        <li>Nigerian Army</li>
                        <li>Nigerian Navy</li>
                        <li>And many other reputable organizations both local and foreign</li>
                    </ul>
                </div>

                <div className="meet-ceo shadow-md text-slate-100 relative p-5 md:p-10 my-10 rounded-md">
                    <div className="about-ceo md:w-7/12">
                        <h3 className="text-white text-3xl font-bold">Meet the CEO</h3>

                        <p className="text-md text-justify">
                            Dr. Emmanuel E. Ekuwem B.Sc., M.Sc., M.Sc., PhD, MIEEE, MISOC, a former National President of the Association of Telecommunication Companies of Nigeria (ATCON), former President of Nigeria Internet Group (NIG) is the Founder and CEO of Teledom Group, an indigenous conglomerate company with expertise in Broadband Information and Communications Technology (ICT)  infrastructure development, deployment and software development for the automation of national socio-economic activities to sustainably boost productivity, enhance good corporate governance and engender prosperity and national well-being .  He has tremendous capabilities and versatility in telecom engineering, information technology and telecom peripherals instrumentation.  His vast knowledge, expertise and experience are a resource and guiding tool for both his company and the larger society.
                        </p>
                    </div>
                    <div className="hidden md:block ceo-img absolute -right-20 bottom-0">
                        <img src={DrEkuwem} alt="" className="-scale-x-100 w-11/12" />
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default AboutText;