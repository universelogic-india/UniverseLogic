import './heroSection.css'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    
    <div className={`heroContainer`}>
   
      <div className="shape hero-shape-2"></div>
      <div className="hero-text-content">
        <h1 className="hero-title">
         <Typewriter 
            options={
              {
                autoStart: true,
                loop:true,
                delay: 100,
                strings: [" IT <span class='red-name'>COMPANY</span><br />with Leading Gen<span class='green-name'>AI</span>"]
              }
            }
         
         />
        </h1>
        <p className="hero-subtitle">
          SOFTWARE | WEBSITES | SERVICES
        </p>
      </div>
      

        <div className="bg-img">
          <img src="/src/assets/hero-img.png" alt="Hero-Background" className='responsive-img'/>
        </div>    
    </div>
    
  )
}

export default HeroSection
