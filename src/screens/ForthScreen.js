import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"
import ProcessStep from "../components/steps/Steps"
import styles from "./ForthScreen.module.css"

const ForthScreen=()=>{


return <>
<div className={styles.title}>אתן שואלות, אני עונה</div>
 <FAQItem question="בנוסף לכלה את מאפרת גם מלוות?" answer="בגלל שחשובה לי האיכות ולא הכמות אני מגבילה את מספר המלוות שאני מארגנת בנוסף לכלה מהסיבה שמלוות צריכות להיות מוכנות באותה השעה יחד הכלה. אני ממליצה להפריד ספקים. אם מדובר באירוע קיץ אני מקבלת  עד 2 מלוות לאיפור או עוד מלווה נוספת אחת לאיפור ושיער.  
במידה ומדובר באירוע חורף אני לא מארגנת יחד עם הכלה מלוות שצריכות לצאת איתה לצילומים מכיוון ששעת היציאה היא מוקדמת יותר. 
אם המלוות לא יוצאות באותה השעה עם הכלה אשמח לארגן גם אותן."/> 
 <FAQItem question="את עושה פגישת ניסיון לכלות?" answer="כן. אני נפגשת עם הכלות שלי כחודש לפני האירוע שלהן לפגישה מקיפה הכוללת איפור ניסיון מלא. 
הפגישה היא לגמרי עבורך! כדי שתוכלי להיות רגועה ביום של האירוע כשאת כבר יודעת איך את הולכת להיראות, תיאמנו ציפיות ובחרנו את הלוק המדוייק עבורך בהתאם לשמלה שתלבשי. בפגישה כמובן גם יש התייחסות לשיער - אני מתאימה תוספות ומציגה סקיצה של תסרוקות אופציונליות
בפגישה אני מכירה אותך יותר, מדייקת את הרצונות שלך בהתאם להבנה המקצועית שלי 
ויחד מגיעות לתוצאה שחלמת עלייה 
בלי הפתעות ביום של החתונה."/> 
 <FAQItem question="את עושה ליווי לאולם? כמה זה נחוץ?" answer="כן. אני מלווה את הכלות שלי גם בערב האירוע במידה והן בוחרות 
יש לי אופציה ל -2 ליווים, קצר עד חופה או ארוך עד החלפת לוק שני.  
בליווי מלבד טאצ אפים והחלפת תסרוקת 
אני שם כמו חברה נוספת עבורך, מוצאת פתרונות לבעיות, מקלילה ומרגיעה אותך כשצריך ❤️ 
ליווי בעיניי הוא כן נחוץ. בעיקר לשיער 
וזה משתנה ותלוי בסוג תסרוקת ובסוג שיערה של הכלה. מוזמנת להתייעץ איתי בנושא."/> 
 <FAQItem question="אני רוצה שתאפרי את אמא שלי. יש לך ניסיון עם עור בוגר?" answer="כמובן! לאורך כל הקריירה שלי איפרתי נשים בכל הגילאים ובכל סקלת הצבעים, 
אכן איפור לעור בוגר כמעט תמיד שונה בהכנה שלו  ובשימוש נכון במוצרים ובכמויות. 
את יכולה  להיות רגועה שאמא נמצאת בידיים מקצועיות וטובות."/> 
 <FAQItem question="כמה זמן מומלץ לשריין איתך מראש?" answer={<>כאשר יש לך תאריך לאירוע, אני ממליצה כבר לשריין. ברגע שכלה סוגרת איתי אני נועלת ביומן את התאריך עבורה ומתחייבת לא לקחת כלות או לקוחות נוספות באותו היום.
    <br/>
    <Button text="סתיו אני רוצה לשריין מקום"/>
    </>}/> 
    <Button text="סתיו,בואי נדבר!"/>
</>


}
export default ForthScreen