import React from 'react';
import styles from './Hishtalmut.module.css';
import { Briefcase, Heart, Target, Palette, Sun, ChevronDown,  Settings, Compass } from 'lucide-react';

function Hishtalmut() {
  return (
    <div className={styles.container}>
      <div className={styles.openingSection}>
        <h2 className={styles.openingQuestion} id="מאפרת">מאפרת או מעצבת שיער?</h2>
        <p className={styles.subQuestion}>מרגישה שיש נקודות בעסק שאת צריכה להתחזק בהן?</p>
        <p className={styles.invitation}>אני מזמינה אותך להשתלמות 1:1 בת 3 שעות</p>
        <p className={styles.noSecrets}>בלי סודות</p>
      </div>
      <h2 className={styles.openingQuestion}>שתקבלי בה </h2>
      <div className={styles.iconSection}>
        <div className={styles.iconItem}>
          <Settings className={styles.icon} size={24} />
          <p>את כל הכלים הפרקטיים לעבודה עם לקוחות וכלות הכוללת הדגמה שלי וזמן תרגול שלך</p>
        </div>
        <div className={styles.iconItem}>
          <Settings className={styles.icon} size={24} />
          <p>סדנא שמותאמת בדיוק לצרכים שלך</p>
        </div>
        <div className={styles.iconItem}>
          <Settings className={styles.icon} size={24} />
          <p>ליווי אישי שלי בהמשך הדרך במידת הצורך.</p>
        </div>
      </div>
      
      <p className={styles.subtitle} >
      את לא מאפרת מקצועית 
      אבל כן רוצה לדעת להתאפר ברמה גבוהה?
      </p>
      <p className={styles.subtitle}>
        ההשתלמות הבאה בדיוק בשבילך
      </p>
      
      <ChevronDown className={styles.icon} size={36}/>
      
      <h1 className={styles.title}>סדנת איפור אישית</h1>
      <p className={styles.subtitle}>
        סדנה 1:1 במשך 3 שעות בה תרכשי כלים וטכניקות שונות כיצד להתאפר בצורה הנכונה לך
      </p>
      
      <main className={styles.mainContent}>
        <div className={styles.grid}>
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
      </main>
    </div>
  );
}

export default Hishtalmut;