import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

import styles from "./FirstScreen.module.css";
import GlassButton from '../components/ButtonScroll/ScrollButton';

import logo from "../images/סתיו יעקובי לוגו.png";
import LoadingEffect from '../components/loader/Loader';
import leftImage from '../images/סתיו יעקבי כלה 2.png'
import centerImage from '../images/סתיו יעקבי.png'
import rightImage from '../images/סתיו יעקבי כלה 1.png'
export default function FirstScreen() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all([
      loadImage(leftImage),
      loadImage(centerImage),
      loadImage(rightImage)
    ])
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Error loading images", err));
  }, []);

  if (!imagesLoaded) {
    return <LoadingEffect/>;  // משתמש בקומפוננטת Loader
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>סתיו יעקובי</h1>
        <p className={styles.subtitle}>איפור ושיער לכלות || השתלמויות איפור</p>
        <GlassButton text="אני כלה לעתיד" targetId="כלה לעתיד"/>
        <GlassButton text="אני מאפרת" targetId="מאפרת"/>
        <ChevronDown className={styles.icon} size={36}/>
      </div>
    </div>
  );
}