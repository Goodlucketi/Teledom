import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scroll from './scrollToTop';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from './home/navbar';
import Solutions from './Pages/Solutions';
import Clientele from './Pages/Clientele';
import Contact from './Pages/Contact';
import Broadband from './Pages/solnDescription/Broadband';
import Smart from './Pages/solnDescription/Smart';
import Security from './Pages/solnDescription/Security';
import Consult from './Pages/solnDescription/Consult';
import Software from './Pages/solnDescription/Software';
import VideoComm from './Pages/solnDescription/VideoComm';
import Capture from './Pages/solnDescription/Capture';

function App() {


  return (
    <Router>
      <Scroll />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/client' element={<Clientele />}/>
        <Route path='/contact' element={<Contact />}/>

        {/* Solution Routes */}
        <Route path='/broadband' element={<Broadband />}/>
        <Route path='/capture' element={<Capture />}/>
        <Route path='/security' element={<Security />}/>
        <Route path='/software' element={<Software />}/>
        <Route path='/video' element={<VideoComm />}/>
        <Route path='/smart' element={<Smart />}/>
        <Route path='/consult' element={<Consult />}/>
      </Routes>
    </Router>
  )
}

export default App
