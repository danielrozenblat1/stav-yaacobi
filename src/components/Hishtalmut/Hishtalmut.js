import React from 'react';
import styles from './Hishtalmut.module.css';
import hishytalmut from "../../images/השתלמויות.jpeg";
import { Briefcase, Heart, Target, Palette,  Sun, ChevronDown } from 'lucide-react';

function Hishtalmut() {
  return <>
 
    <div className={styles.container} >
    <p className={styles.subtitle}id="מאפרת">
        את מאפרת ואת מרגישה שיש נקודות בעסק שלך שאת צריכה להשתפר בהן?
      </p>
      <p className={styles.subtitle}>
     הסדנה הבאה בדיוק בשבילך
      </p>
     
    <ChevronDown className={styles.icon} size={36}/>
      <h1 className={styles.title}>סדנת איפור אישית</h1>
      <p className={styles.subtitle}>
         סדנה 1:1 במשך 3 שעות בה תרכשי כלים וטכניקות שונות כיצד להתאפר בצורה הנכונה לך
      </p>
      
      <main className={styles.mainContent}>
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>סדר והבנה</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Briefcase size={20} />
                סידור תיק האיפור האישי שלך
              </li>
              <li className={styles.listItem}>
                <Heart size={20} />
                שיפור שגרת הטיפוח
              </li>
              <li className={styles.listItem}>
                <Target size={20} />
                דיוק השימוש במוצרים הקיימים
              </li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>איפור משותף</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Palette size={20} />
                איפור חצי פנים והסבר מפורט על טכניקות איפור שונות
              </li>
              <li className={styles.listItem}>
                <Sun size={20} />
                השמה שלך על חצי הפנים השני תוך ליווי שלי
              </li>
              <li className={styles.listItem}>
                <Sun size={20} />
                הדגמת איפור יום יומי ושדרוג לאיפור ערב
              </li>
            </ul>
          </section>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={hishytalmut} alt="הדגמת איפור" className={styles.image} />
        </div>
      </main>
    </div>
    </>
}

export default Hishtalmut;