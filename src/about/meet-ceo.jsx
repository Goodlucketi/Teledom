import DrEkuwem from "../assets/images/Dr_Ekuwem22.png"
import Button from "./button";

const MeetCeo = () => {
    return ( 
        <main className="meetceo">
            <div className="meet-ceo shadow-md text-slate-100 relative p-5 md:p-10 my-10 rounded-md">
                <div className="about-ceo md:w-7/12">
                    <h3 className="text-white text-3xl font-bold">Meet the CEO</h3>

                    <p className="text-md my-5 md:text-justify">
                        Dr. Emmanuel E. Ekuwem B.Sc., M.Sc., M.Sc., PhD, MIEEE, MISOC, a former National President of the Association of Telecommunication Companies of Nigeria (ATCON), former President of Nigeria Internet Group (NIG) is the Founder and CEO of Teledom Group, an indigenous conglomerate company with expertise in Broadband Information and Communications Technology (ICT)  infrastructure development, deployment and software development for the automation of national socio-economic activities to sustainably boost productivity, enhance good corporate governance and engender prosperity and national well-being .  He has tremendous capabilities and versatility in telecom engineering, information technology and telecom peripherals instrumentation.  His vast knowledge, expertise and experience are a resource and guiding tool for both his company and the larger society.
                    </p>
                </div>
                <div className="hidden md:block ceo-img absolute -right-20 bottom-0">
                    <img src={DrEkuwem} alt="" className="-scale-x-100 w-11/12" />
                </div>
                <Button link={'/about'} text={'Learn More'} />

            </div>
        </main>
     );
}
 
export default MeetCeo;