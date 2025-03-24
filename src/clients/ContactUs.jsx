const ContactUs = () => {
    return ( 
        <main className="mx-auto md:w-11/12 p-2 md:p-4">
            <div className="md:w-11/12 mx-auto my-3 p-4">
                <div className="address my-5 shadow-md p-3 md:p-4 md:w-10/12 mx-auto md:text-lg">
                    <h3 className="font-bold text-xl my-3">Head Office</h3>
                    <p>6A & 6B, Sule Abuka crescent Off Opebi Road, Ikeja, Lagos.</p>
                    <p>Tel: <a className="text-blue-500" href="tel:+2348081131346">+234 (0) 808 113 1346</a>, <a className="text-blue-500" href="tel:+2348083035594">+234 (0) 808 303 5594</a></p>
                    <p>E-mail: <a href="mailto:info@teledominternational.net">info@teledominternational.net</a></p>
                </div>

                <div className="address my-10 shadow-md p-3 md:p-4 md:w-10/12 mx-auto text-lg">
                    <h3 className="font-bold text-xl my-3">Uyo Branch Office</h3>
                    <p>Teledom International Limited 24, Akpakpan Street, Off Wellington Bassey Way, Uyo, Akwa Ibom State.</p>
                    <p>Tel: <a className="text-blue-500" href="tel:+2348081131346">+234 (0) 808 113 1346</a>, <a className="text-blue-500" href="tel:+2348083035594">+234 (0) 808 303 5594</a></p>
                    <p>E-mail: <a href="mailto:uyo@teledominternational.net">uyo@teledominternational.net</a></p>
                </div>
            </div>
        </main>
     );
}
 
export default ContactUs;