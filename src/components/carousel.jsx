
import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import PlayButton from './playbutton'; // Import the PlayButton component
import VideoPopup from './videopopup'; // Import the VideoPopup component

const Carousel = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const items = [
    {
      id: 1,
      playbuttonImage:"url('http://www.w3.org/2000/svg')",
      tagline: "The fresh lime sodas",
      title: "Kumari",
      description: "Nirmal sahadev/jakes bejoy",
      bgImage: "url('https://img.nowrunning.com/content/movie/2021/kumar-25483/Stills/kumari_2022101.jpg')",
      videoUrl: "https://youtu.be/dGzKcctHnQU?si=VxgOr27ZLhYJKTsf"
    },
    {
      id: 2,
      title: "Santhosham",
      description: "Ajith V Thomas/Mise-En-Scene Entertainment",
      bgImage: "url('https://img.nowrunning.com/content/movie/2021/santh-25585/bg3.jpg')",
      videoUrl: "https://youtu.be/dGzKcctHnQU?si=VxgOr27ZLhYJKTsf"
    },
    {
      id: 3,
      tagline: "DULQUER SALMAN PRESENTS",
      title: "Adi",
      description: "Prasobh Vijayana/Govind Vasantha",
      bgImage: "url('https://img.nowrunning.com/content/movie/2021/adi-25533/bg3_adi.jpg')",
      videoUrl: "https://youtu.be/4UER-fIltj4?si=LLllD2NI2-Rq1Sv8"
    }
  ];
  const handlePlay = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const closePopup = () => {
    setCurrentVideo(null);
  };

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState('transform 0.5s ease');
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionStyle('transform 0.5s ease');
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        if (nextIndex >= items.length) {
          // Reset to first item without animation after reaching end
          setTimeout(() => {
            setTransitionStyle('none');
            setCurrentIndex(0);
          }, 500);
          return prev;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className={styles.container}>
      <div 
        className={styles.carouselTrack}
        ref={carouselRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionStyle
        }}
      >
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`${styles.item} ${index === currentIndex ? styles.center : ''}`}
            style={{ backgroundImage: item.bgImage }}
          >
            <div className={styles.content}>
            <PlayButton onClick={() => handlePlay(item.videoUrl)} />
              <h6>{item.tagline}</h6>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {currentVideo && <VideoPopup videoUrl={currentVideo} onClose={closePopup} />}
    </section>
  );
};


export default Carousel;