import About from './Components/About';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Chef from './Components/Chef';
import Contact from './Components/Contact';
import Booking from './Components/Booking';

function App() {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <nav className="navbar">
        <ul className='nav-links'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/menu"><li>Menu</li></Link>
          <Link to="/chef"><li>Chef</li></Link>
          <Link to="/cont"><li>Article</li></Link>
          <Link to="/bok"><li>Booking</li></Link>
        </ul>
      </nav>

      {/* Main content below the navbar */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/cont" element={<Contact/>} />
          <Route path="/bok" element={<Booking/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
