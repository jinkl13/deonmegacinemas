import React from 'react';
import styles from './Carousel.module.css';

const VideoPopup = ({ videoUrl, onClose }) => {
  return (
    <div className={styles.videoPopupOverlay}>
      <div className={styles.videoPopupContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;