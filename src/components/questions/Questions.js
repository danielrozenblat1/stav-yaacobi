import React, { useState, useRef, useEffect } from 'react';
import { Player } from '@lordicon/react';
import styles from './Questions.module.css';
import makeup from "../../Icons/wired-outline-1587-cosmetic-brush-hover-pinch.json";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef?.current;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    playerRef.current?.playFromBeginning();
  };

  return (
    <div className={styles.faqItem} id="שאלות תשובות">
      <button
        className={styles.questionButton}
        onClick={toggleAnswer}
      >
        <div className={styles.iconWrapper}>
          <Player
            icon={makeup}
            size={34}
            ref={playerRef}
          />
        </div>
        <span className={styles.questionText}>{question}</span>
      </button>
      <div 
        className={styles.answerContainer} 
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>
          <p className={styles.answerText}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;