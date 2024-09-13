import airlive from "../assets/images/partner_airlive.png"
import emblaze from "../assets/images/partner_emblaze.png"
import planet from "../assets/images/partner_planet.png"
import hondure from "../assets/images/partner_hondure.png"

const Partners = () => {
    return ( 
        <main className="partners shadow-md py-5 md:py-16">
            <h2 className="text-3xl font-bold md:mb-10 text-center text-slate-100">Our Partners</h2>
            <div className="w-11/12 mx-auto p-4">
                <ul className="list-none flex gap-3 md:gap-20 justify-center items-center">
                    <li><img src={airlive} alt="partner_airlive" /> </li>
                    <li><img src={emblaze} alt="partner_emblaze" /> </li>
                    <li><img src={planet} alt="partner_planet" /> </li>
                    <li><img src={hondure} alt="partner_hondure" /> </li>
                </ul>
            </div>
        </main>
     );
}
 
export default Partners;