import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

const PlayButton = ({ onClick }) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFillPercentage(prev => {
        if (isHovered) {
          return prev >= 100 ? 100 : prev + 2; // Faster fill when hovered
        }
        return prev >= 100 ? 0 : prev + 0.5; // Slower default animation
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className={styles.playButtonContainer}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Play trailer"
    >
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100"
        className={styles.playButton}
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="rgba(0,0,0,0.5)"
          className={styles.buttonBackground}
        />
        
        {/* Animated progress ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * fillPercentage / 100)}
          transform="rotate(-90 50 50)"
          className={styles.progressRing}
        />
        
        {/* Play triangle */}
        <polygon
          points="38,32 38,68 72,50"
          className={styles.playIcon}
        />
      </svg>
    </div>
  );
};

export default PlayButton;