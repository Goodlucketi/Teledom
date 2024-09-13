import Button from "./button";



const AboutText = () => {
    return ( 
        <main className="about">
            <div className="w-11/12 p-2 mx-auto">
                <div className="mission_statement shadow-md bg-white p-5 md:p-10">
                    <p className="md:text-lg">
                        Teledom International Limited, RC: 337366 is fully incorporated in Nigeria with the Corporate Affairs Commission Abuja to carry out the business of Information and Communication Technology (ICT) facilities provisioning within and outside Nigeria. Teledom International is a member of Teledom Group. The Group also has WebInn Limited and Technology Development Company Limited both which offer other specialized ICT-based services while IT MART (Resources) Limited, which is a One-Stop Infotech Superstore.
                    </p>

                    <h3 className="mt-7 py-2 font-bold text-xl text-blue-900">Mission Statement</h3>
                    <p className="md:text-lg">
                        To automate every socio-economic process using Broadband Information and Communications Technology (ICT) infrastructures and multimedia facilities with appropriate content solutions to boost national economic productivity and prosperity.
                    </p>
                </div>

                <div className="uniqueness shadow-md bg-white p-5 md:p-10 my-10">
                    <p className="md:text-lg font-bold">The most prefered ICT solution provider with a digital A+ rating from its clients</p>

                    <ul className="list-disc pl-5 md:px-10 md:text-lg my-5">
                        <li>Nigerian Communications Commission (NCC)</li>
                        <li>National Information Technology Development (NITDA)</li>
                        <li> Central Bank of Nigeria</li>
                        <li>Nigerian Army</li>
                        <li>Nigerian Navy</li>
                        <li>And many other reputable organizations both local and foreign</li>
                    </ul>
                </div>

                
            </div>
        </main>
     );
}
 
export default AboutText;