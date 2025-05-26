
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedin, 
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Fixing marker icon path issue
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  return (
    <>
    <section className="contact-breadcrumb">
      <div className="cb-container">  
        <div className="cb-container-part1">
          <h2>
            say hi. <br />don't be shy
          </h2>
          <p>we are deon mega cinemas, we are here to help you hire new talents and other human resources for your next project. hoping to speak-share your idea to us without a wait.</p>
          <div className="cbc-p1-image-container">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTwitter} />
                        
                      </div>
        </div>
        <div className="cb-container-part2">
          <div className="cbc-p2-text-and-textarea">
            <p>message</p>
            <textarea></textarea>
          </div>
          <div className="cbc-p2-text-and-textarea">
            <p>your name</p>
            <textarea></textarea>
          </div>
          <div className="cbc-p2-text-and-textarea">
            <p>your mail</p>
            <textarea></textarea>
          </div>
          <div className="cbc-p2-ctc-submit-button">
            <button>send message</button>
          </div>
        </div>
      </div>
    </section>
    <section className="cp-2">
      <div className="cp-2-container">
        <h2>contact info</h2>
        <table className="cp-table">
          <tr>
            <th>department</th>
            <th>email</th>
            <th>phone</th>
         </tr>
         <tr>
          <td>Office</td>
          <td>office@deonmega.cinema</td>
          <td>+91 9598568752</td>
         </tr>
         <tr>
          <td>Studio manager</td>
          <td>studio.manager@deonmega.cinema</td>
          <td>+91 9598568753</td>
         </tr>
         <tr>
          <td>Production</td>
          <td>prodcution@deonmega.cinema</td>
          <td>+91 9598568752</td>
         </tr>
         <tr>
          <td>Design office</td>
          <td>design.office@deonmega.cinema</td>
          <td>+91 9598568752</td>
         </tr>
        </table>
      </div>
    </section>
    <section className="cp-3">
      <div className="cp3-map" style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={[10.793056, 76.653611]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[10.793056, 76.653611]}>
            <Popup>Deon Mega Cinemas</Popup>
          </Marker>
        </MapContainer>
      </div>
      
    </section>

    </>
  );
};


export default Contact;