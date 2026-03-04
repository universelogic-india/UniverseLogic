import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import HeroSection from './Components/navbar/HeroSection';
import Product from './Components/navbar/Product';
import Services from './Components/navbar/Services';
import Contact from './Components/navbar/Contact';
import Footer from './Components/navbar/Footer';
import AuthForm from './Components/navbar/login'; // Make sure this path points to your login.jsx file

// 1. Extract your main landing page layout into its own component
const LandingPage = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const x = e.clientX;
    const y = e.clientY;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
  className="main-app-container"
  ref={containerRef}
  onMouseMove={handleMouseMove}
>
      <Navbar />
      <div className='heroSection'><HeroSection /></div>
      <div className='Product'><Product /></div>
      <div className="Services"><Services /></div>
      <div className='Contact'><Contact /></div>
      <div className='Footer'><Footer /></div>
    </div>
  );
};

// 2. Set up the Router
const App = () => {
  return (
    <Router>
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* The login/register page */}
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;