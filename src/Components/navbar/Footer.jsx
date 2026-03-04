import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className={`footer-container`}>
      <div className="shape footer-shape-1"></div>
        <hr className='line'/>
        <div className="footer-top">
        <div className="footer-col brand-info">
          <h2 className="footer-logo">UNIVERSE <span>LOGIC</span></h2>
          <p>Simplifying business operations with smart software solutions. We help companies streamline processes and drive growth through innovation.</p>
          <div className="social-links">
            <a href="#"><img src={'/src/assets/facebook.png'} alt="Facebook" /></a>
            <a href="#"><img src={'/src/assets/linkedin.png'} alt="LinkedIn" /></a>
            <a href="#"><img src={'/src/assets/twitter.png'} alt="Twitter" /></a>
            <a href="https://www.instagram.com/dev_saquib?igsh=MTI4MmduanNtNGwzOQ=="><img src={'/src/assets/instagram.png'} alt="Instagram" /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Asset Management</a></li>
            <li><a href="#">Inventory System</a></li>
            <li><a href="#">Hospital System</a></li>
            <li><a href="#">Retail POS</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">API Integration</a></li>
            <li><a href="#">Consultancy</a></li>
          </ul>
        </div>


        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

      <div className="footer-col contact-info">
        <h3>Contact Us</h3>
        <p>📍 Mumbai, Maharashtra</p>
        <p>📞<span> +91 8541078902</span></p>
        <p>✉️ support@universelogic.in</p>
      </div>
      <div className="legal-links">
          <a href="#">Privacy & Policy</a>
          <span className="divider-legal-links">|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        
        <p>&copy; 2026 <span className='footer-name'>UNIVERSE LOGIC</span>. All rights reserved.</p>
        
      </div>
      
    </footer>
  )
}

export default Footer
