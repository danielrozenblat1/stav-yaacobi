import React from 'react';
import styles from './Me.module.css';
import stav from "../../images/סתיו יעקבי תדמית.png"
import Button from "../button/Button"
const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={stav} alt="סתיו יעקבי" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>סתיו יעקובי</h1>
        <p className={styles.subtitle}>"כאן כדי להפוך את היום הכי מלחיץ בחיים שלך לחוויה שלא תשכחי"</p>
        <p className={styles.description}>אני חיה את תחום היופי והאסתטיקה כבר מעל ל-8 שנים. במהלך שנותי בתחום איפרתי וסירקתי מאות נשים בכל סקלת הצבעים והגילאים </p>
        <p className={styles.description}>מלבד לקוחות פרטיות עבדתי גם כמאפרת ומסרקת בתכניות טלויזיה ,תצוגות אופנה ,פרסומות וקליפים ומספר שנים כמדריכה לאיפור בבית הספר הגבוה למקצועות היופי של ירין שחף</p>
        <p className={styles.description}>אני באמת מאמינה בלעבוד מכל הלב, בלהוציא כלות ביום חתונתן בגרסה הכי טובה שלהן ובלהפוך את היום הזה שיכול להיות סופר מלחיץ לחוויה אחת ענקית!</p>

      </div>
    </div>
<Button text="סתיו, אני רוצה לשריין תאריך"/>
    </>
};

export default AboutMe;