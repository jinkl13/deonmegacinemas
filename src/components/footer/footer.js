import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faTwitter, 
  faVimeoV 
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

import logo from '../../assets/deon-logo-1.png';

const Footer = ({ showBackToTop, scrollToTop }) => {
  return (
    <>
      <section className="ls5">
        <div className="ls5-container">
          <div className="ls5-part-one">
            <div className="ls5-image-container">
              <img 
                className="ls5-logo"
                src={logo}
                alt="Deon Logo" 
              />
            </div>
          </div>
          <div className="ls5-part-two">
            <div className="ls5-part-two-1by3">
              <p>what we do</p>
              <p>about us</p>
              <p>help and faq</p>
            </div>
            <div className="ls5-part-two-1by3">
              <p>team</p>
              <p>contact us</p>
              <p>speakers</p>
            </div>
            <div className="ls5-part-two-1by3">
              <p>program</p>
              <p>shop</p>
              <p>blog</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="ls6">
        <div className="ls6-container">
          <div className="ls6-part-one">
            <div className="ls6-image-container">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faVimeoV} />
            </div>
            <p>© {new Date().getFullYear()} DEON MEGA CINEMAS, All Rights Reserved</p>
          </div>
          <div className="ls6-part-two">
            <div className="ls6-part-two-subsection">
              <p>Townhall Metro, Jn, </p>
              <p>Lissie Rd, near Kochi, Kerala 682018</p>
            </div>
            <div className="ls6-part-two-subsection">
              <div className="ls6-part-two-subsection-newsletter">
                <p>Sign up to Newsletter</p>
                <FontAwesomeIcon 
                  icon={faArrowRight}
                  className="newsletter-arrow"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(100%) rotate(-45deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showBackToTop && (
        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Footer;