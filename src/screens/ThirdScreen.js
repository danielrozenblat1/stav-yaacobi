import Button from "../components/button/Button"
import ProcessStep from "../components/steps/Steps"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
<div className={styles.title}>וזה קורה ככה</div>
  <div className={styles.center}>
      <ProcessStep
        number="1"
        title="שיחת אפיון"
        description="פגישה ראשונית לבירור מטרות, העדפות, וחזון אישי. אשאל שאלות מעמיקות כדי להבין את הסגנון הרצוי ואת האווירה המבוקשת לאירוע."
      />
      <ProcessStep
        number="2"
        title="איפור ניסיון"
        description="כחודש לפני האירוע, ניפגש לאיפור ניסיון. אשלב את החזון שלך עם ההמלצות המקצועיות שלי כדי ליצור מראה מושלם המתאים לך ולאירוע."
      />
      <ProcessStep
        number="3"
        title="יום האירוע"
        description="ביום הגדול, אהיה איתך מתחילת היום ועד לאירוע עצמו. אטפל באיפור, שיער ובהתארגנות הכללית כדי להבטיח שתרגישי ותיראי הכי טוב שאפשר."
      />
    </div>
    <Button text="סתיו,בואי נדבר!"/>
</>


}
export default ThirdScreen