import Navbar from "../home/navbar";
import Hero from "../home/Hero";
import Services from "../home/Service";
import About from "../home/About";
import Partners from "../home/Partners";
import Contact from "../home/Contact";
import Footer from "../home/Footer";

const Home = () => {
    return ( 
        <main>
            <Hero />
            <Services />
            <About />
            <Partners />
            <Contact />
            <Footer />
        </main>
     );
}
 
export default Home;