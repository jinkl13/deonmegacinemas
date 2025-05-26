import Navbar from '../components/navbar/navbar.js';

import '../App.css';

import Carousel from '../components/carousel.jsx';
import React, { useState, useEffect } from 'react'; 



const Ticker = ({ items = [] }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {/* Original items */}
        {items.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
        {/* Duplicate items for seamless looping */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

function App() {
  const tickerItems = [
    "drama",
    "•",
    "love",
    "•", 
    "passion",
    "•",
  ];

  const [showBackToTop, setShowBackToTop] = useState(false); // Add this state declaration

 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
        <Navbar />

      <section className="landing-hero">
        <div className="landing-content">
          <h4>We proudly present</h4>
          <h1>Deon Mega Cinemas</h1>
        </div>
        <div className="corner-image">
          <img 
            className="corner-image-main-image"
            src={require('../assets/landing/zh1-rev-car-new.png')} 
            alt="Premium Experience" 
          />
          <h3>"Thrilling adventure that will keep you on edge"</h3>
          <p>Yasmin Bergam, Movie Magazine</p>
          <div className="corner-image-support-image">
            {[1, 2, 3].map((num) => (
              <img 
                key={num}
                className="corner-image-support-icons"
                src={require(`../assets/landing/h11-rev-icon${num}.png`)} 
                alt="Certification Badge" 
              />
            ))}
          </div>
        </div>
      </section>
      

      <section className="ls2">
        <div className="ls2-container">
          <div className="ls2-part-one">
            <h4>Synopsis</h4>
            <h3 className="ls2-heading">
              the telling of two<br />
              intertwining lives.<br />
              mass <span className="ls2-part-one-special">destruction</span>
            </h3>
          </div>
          <div className="ls2-part-two">
            <p>
              Deon mega cinemas focuses on profitable films at low budgets according to 
              industry trends in multiple languages. Our aim is to build a group of 
              innovative professionals within the film industry and work as a team 
              while providing quality production and post-production facilities at 
              competitive rates.
            </p>
          </div>
        </div>
      </section>
      

      {/* Carousel Section */}
      <Carousel />

      <section className="ls3">
        <div className="ls3-container">
        <h2>Our upcoming movies</h2>
            <div className="ls3-image-div"></div>
        </div>
      </section>
      
      <section className="ls4">
      <h5>the story about</h5>
      <Ticker items={tickerItems} />
        <div className="ls4-container">
          
          <p>starring</p>
          <div className="ls4-subsection">
             <div className="ls4-subsection-image-div">
              <div className="image-hover-container">
                <img 
                  className="ls4-subsection-image"
                  src={require('../assets/landing/h1-team1.jpg')} 
                  alt="Main Character" 
                />
                <div className="image-hover-overlay"></div>
              </div>
                <h3>Isidora rutta</h3>
                <h4>as emily</h4>
              </div>
             <div className="ls4-subsection-image-div">
             <div className="image-hover-container">
                <img 
                  className="ls4-subsection-image"
                  src={require('../assets/landing/h1-team2.jpg')} 
                  alt="Main Character" 
                />
                <div className="image-hover-overlay"></div>
              </div>
                <h3>nick turner</h3>
                <h4>as joel</h4>
              </div>
             <div className="ls4-subsection-image-div">
              <div className="image-hover-container">
                <img 
                  className="ls4-subsection-image"
                  src={require('../assets/landing/h1-team3.jpg')} 
                  alt="Main Character" 
                />
                <div className="image-hover-overlay"></div>
              </div>
                <h3>ron bradley</h3>
                <h4>as nick</h4>
              </div>
             <div className="ls4-subsection-image-div">
              <div className="image-hover-container">
                <img 
                  className="ls4-subsection-image"
                  src={require('../assets/landing/h1-team4.jpg')} 
                  alt="Main Character" 
                />
                <div className="image-hover-overlay"></div>
              </div>
                <h3>sofia brown</h3>
                <h4>as anna</h4>
              </div>
          </div>
        </div>
      </section>
      
    </div>  
          
  );
}

export default App;