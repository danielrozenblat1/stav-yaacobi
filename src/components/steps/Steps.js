import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Steps.module.css';

const ProcessStep = ({ number, title, description }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ScrollReveal().reveal(containerRef.current, {
        delay: 200,
        distance: '20px',
        duration: 1000,
        easing: 'ease-out',
        origin: 'bottom',
        reset: false,
        viewFactor: 0.2,
      });
    }
  }, []);

  const formattedNumber = number.toString().padStart(2, '0');

  return (
    <div ref={containerRef} className={styles.stepContainer} data-number={formattedNumber}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;