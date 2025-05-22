import React from 'react';
import './about.css'; // Assuming you have a CSS file for styling
const About = () => {
  return (
    <>
      <section className="about-page bg-black">
        <div className="breadcrumb-about-page">
          <img
            src={require('../assets/about/title-img-1.jpg')}
            alt="breadcrumb discussion" />
        </div>
      </section>
      <section className="ap2 bg-black">
        <div className="ap2-container">
          <div className="ap2-main">
            <h4>About us</h4>
            <p>two stories a <br />beautiful ode to <br />destruction.</p>
          
          </div>
          <div className="ap2-text">
            
            <p>We are a passionate crew of filmmakers, photographers, and artists devoted to crafting fascinating narratives via the lens of our cameras. Our mission is to create captivating stories that resonate with the audience and We pride ourselves on turning in effective cinematic experiences that make a lasting effect.</p>
            <p> We understand that budget is a concern for making a film, and with our creative team, we can tailor solutions to fit your specific budget without compromising quality.</p>
          </div>
        </div>

      </section>
      <section className="ap3 bg-black">
        <div className="ap3-container">
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-1.png')}
            alt="Premium Experience" />
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-2.png')}
            alt="Premium Experience" />    
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-3.png')}
            alt="Premium Experience" />
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-4.png')}
            alt="Premium Experience" />    
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-5.png')}
            alt="Premium Experience" />
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-6.png')}
            alt="Premium Experience" />    
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-7.png')}
            alt="Premium Experience" />
          <img
            className="ap3-img"
            src={require('../assets/about/client-img-8.png')}
            alt="Premium Experience" />    
        </div>
      </section>
      <section className="ap4 bg-black"> 
          <div className="ap4-container">
            <div className="ap4-text">
              <h3>mission</h3>
              <p>The aim is to create a team with excellent skills in the Indian film industry to deliver world-class films.</p>
            </div>
            <div className="ap4-text">
              <h3>vision</h3>
              <p>Our vision is to make exceptional films that resonate with the audience.</p>
            </div>
          </div>
      </section> 
      <section className="ap5 bg-black">
      <h3>features</h3>
      <h2>why choose us</h2>
        <div className="ap5-container">
          <div className="ap5-text">
            <img 
            className="ap5-img"
            src={require('../assets/about/product1.jpg')}     
            alt="team" />
            <h2>Film Production</h2>
            <p>The art of production meets workflow within sc</p>
          </div>
          <div className="ap5-text">
            <img 
            className="ap5-img"
            src={require('../assets/about/product2.jpg')}     
            alt="team" />
            <h2>Creative Direction</h2>
            <p>What gives you the vibe? Yah, its always what you.</p>
          </div>
          <div className="ap5-text">
            <img 
            className="ap5-img"
            src={require('../assets/about/product3.jpg')}     
            alt="team" />
            <h2>Content Production</h2>
            <p>Always get ypur team ready, because we are here to support the plot.</p>
          </div>
        </div>
      </section>
      <section className="ap6 bg-black">
        <h3>our work</h3>
        <h2>featured work</h2>
        <div className="ap6-container">
          <div className="ap6-text1 ap6-text">
            
            <h2>we make it awesome</h2>
            <p>comercial music video</p>
          </div>
          <div className="ap6-text2 ap6-text">
            
            <h2>we make it awesome</h2>
            <p>comercial music video</p>
          </div>
        </div>  
      </section>
    </>
    
  );
};

export default About;