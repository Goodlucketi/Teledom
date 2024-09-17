import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from './home/navbar';
import Solutions from './Pages/Solutions';
import Clientele from './Pages/Clientele';
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/client' element={<Clientele />}/>
      </Routes>
    </Router>
  )
}

export default App
