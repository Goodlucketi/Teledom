import identity from "../../assets/images/identity2.jpg"
const Capture = () => {
    return ( 
        <main className="p-4 w-11/12 mx-auto">
            <span className="font-bold block text-lg">Identity Capture and Tracking Solutions</span> 

            <div className="flex items-center gap-x-10 justify-between p-4 shadow-md ">
                <img src={identity} alt="Identity Scanner Image" />
                <ul className="px-2 py-6 list-disc">
                    <li className="px-3">Facial detection in adverse video conditions with poor lighting, multiple faces in frame, moving subjects, and complex backgrounds, Detection of multiple faces in a single frame, User controls for efficient search and analysis.</li>
                    <li className="px-3">                  Personnel &amp; Student Smart Identity System (PERIDS)</li>
                    <li className="px-3"> Smart Identification system for schools, offices and government establishments. </li>
                </ul>
            </div>
       </main>
     );
}
 
export default Capture;