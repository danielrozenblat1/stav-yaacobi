import React from 'react';
import { ChevronDown } from 'lucide-react';

import styles from "./FirstScreen.module.css"
import GlassButton from '../components/ButtonScroll/ScrollButton';
import logo from "../images/סתיו יעקובי לוגו.png"

export default function FirstScreen() {
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