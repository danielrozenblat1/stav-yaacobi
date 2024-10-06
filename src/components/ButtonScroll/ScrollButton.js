import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './ScrollButton.module.css';

const GlassButton = ({ text, targetId }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600); // משך האנימציה
  };

  return (
    <ScrollLink 
      to={targetId} 
      smooth={true} 
      duration={500} 
      className={`${styles.glassButton} ${isClicked ? styles.clicked : ''}`}
      onClick={handleClick}
    >
      {text}
    </ScrollLink>
  );
};

export default GlassButton;