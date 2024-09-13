import contactImage from '../assets/images/contact-images.png'
import SocialIcons from './SocialIcons';

const Contact = () => {
    return ( 
        <main className="contact overflow-hidden bg-slate-100 pt-8">
            <div className="w-11/12 mx-auto contact-container md:flex justify-center">
                <div className="contact-image md:w-5/12">
                    <img src={contactImage } alt="contact-image" />
                </div>
                <div className="contact-form md:w-5/12">
                    <h2 className='text-4xl font-bold my-10'>Send us a Message</h2>
                    <form>
                        <div className="name my-4">
                            <input type="text" name="name" id="name" placeholder="Full Name"  className="p-3 border-2 rounded-md w-full"/>
                        </div>
                        <div className="email my-4">
                            <input type="email" name="enail" id="email" placeholder="Email Address" className="p-3 border-2 rounded-md w-full" />
                        </div>
                        <div className="message my-4">
                            <textarea name="message" id="message" placeholder="Message" className="p-3 border-2 rounded-md w-full"></textarea>
                        </div>
                        <div className="submit my-2">
                            <input type="submit" value="Send Message" className='py-3 mx-auto bg-blue-700 text-white rounded-md px-8' />
                        </div>
                    </form>

                    <SocialIcons />
                </div>
                
                </div>
            
        </main>
     );
}
 
export default Contact;