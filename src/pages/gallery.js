
import React from 'react';

import './gallery.css';
const Gallery = () => {
  return (
    <>
    <section className="gallery-page bg-black">
        <div className="breadcrumb-gallery-page">
          <h3>Gallery</h3>
          <ul>
              <li>
                  <a href="./index.js">Home</a>
              </li>
              <li>
                  <span className="gp-list"></span>
              </li>
              <li>Gallery</li>
          </ul>
        </div>
      </section>
      <section className="gallery-content">
        <div className="gallery-content-container">
          <div className="gallery-item">
             <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery1.jpg')}
            alt="gallery-item-1" />
            <p>flora</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery2.jpg')}
            alt="gallery-item-2" />
            <p>fifth day</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery3.jpg')}
            alt="gallery-item-3" />
            <p>violin teacher</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery4.jpg')}
            alt="gallery-item-4" />
            <p>strange life</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery5.jpg')}
            alt="gallery-item-5" />
            <p>blueberries</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-playbutton">
              <div className="circle">
                <div className="traingle"></div>
              </div>
             </div>
            <img
            className="gc-img"
            src={require('../assets/gallery/gallery6.jpg')}
            alt="gallery-item-6" />
            <p>song of my people</p>
          </div>
          
        </div>
      </section>
    </>
    
  );
};


export default Gallery;