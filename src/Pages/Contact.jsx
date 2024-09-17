import AboutHero from "../about/AboutHero";
import ContactForm from "../home/ContactForm";
import contactImg from "../assets/images/contact1.png"
import ContactUs from "../clients/ContactUs";
import Footer from "../home/Footer";

const Contact = () => {
    return ( 
        <main>
            <AboutHero title={'Contact Us'} image={contactImg} />
            <ContactUs />
            <ContactForm />
            <Footer />
        </main>
     );
}
 
export default Contact;