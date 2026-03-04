import React, { useState, useRef } from 'react';
import './login.css';
import './AuthForm.css';

const AuthForm = () => {
const containerRef = useRef(null);
const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const x = e.clientX;
    const y = e.clientY;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

// State to toggle the sliding animation
const [isActive, setIsActive] = useState(false);

return (
    <div className="auth-wrapper" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className={`container ${isActive ? 'active' : ''}`} >
        
        {/* --- Login Form --- */}
        <div className="form-box login">
          <form action="#">
            
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        {/* --- Registration Form --- */}
        <div className="form-box register">
          <form action="#">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        {/* --- Sliding Toggle Panels --- */}
        <div className="toggle-box">
          
          <div className="toggle-panel toggle-left">
            <div className='logo-name-left'>
              <span>UNIVERSE LOGIC</span>
            </div>
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            {/* Clicking this sets isActive to true, sliding the panel right */}
            <button 
              className="btn register-btn" 
              onClick={() => setIsActive(true)}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <div className='logo-name-right'>
              <span>UNIVERSE LOGIC</span>
            </div>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            {/* Clicking this sets isActive to false, sliding the panel left */}
            <button 
              className="btn login-btn" 
              onClick={() => setIsActive(false)}
            >
              Login
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthForm;