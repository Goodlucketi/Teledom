const ContactUs = () => {
    return ( 
        <main className="mx-auto md:w-11/12 p-2 md:p-4">
            <div className="mx-auto my-3 p-4">
                <div className="address my-5 shadow-md p-3 md:p-4 md:w-11/12 mx-auto md:text-lg md:flex md:justify-between md:gap-5">
                    <div className="contact">
                        <h3 className="font-bold text-xl my-3">Head Office</h3>
                        <p>6A & 6B, Sule Abuka crescent Off Opebi Road, Ikeja, Lagos.</p>
                        <p>Tel: <a className="text-blue-500" href="tel:+2347066012671">+234 (0) 706 601 2671</a>, <a className="text-blue-500" href="tel:+2348080580288">+234 (0) 808 058 0288</a></p>
                        <p>E-mail: <a href="mailto:info@teledominternational.net">info@teledominternational.net</a></p>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4284201274763!2d3.3538852743597745!3d6.593554722346605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923ed3749fb7%3A0x91362d0a1f7d3b0a!2sSule%20Abuka%20Cresent%2C%20Opebi%2C%20Wasimi%2FOpebi%2FAllen%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742992222326!5m2!1sen!2sng" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                </div>

                <div className="address my-10 shadow-md p-3 md:p-4 md:w-11/12 mx-auto text-lg md:flex md:justify-between md:gap-5">
                    <div className="contact">
                        <h3 className="font-bold text-xl my-3">Uyo Branch Office</h3>
                        <p>Teledom International Limited 24, Akpakpan Street, Off Wellington Bassey Way, Uyo, Akwa Ibom State.</p>
                        <p>Tel: <a className="text-blue-500" href="tel:+2348081131346">+234 (0) 808 113 1346</a>, <a className="text-blue-500" href="tel:+2348083035594">+234 (0) 808 303 5594</a></p>
                        <p>E-mail: <a href="mailto:uyo@teledominternational.net">uyo@teledominternational.net</a></p>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.424383646079!2d7.93140077435258!3d5.034723838672707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57bf1ce251bd%3A0xe15312d23eaf0a35!2s24%20Akpankpan%20St%2C%20Uyo%20520103%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1742991680818!5m2!1sen!2sng" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                </div>
            </div>
        </main>
     );
}
 
export default ContactUs;