import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"
import ProcessStep from "../components/steps/Steps"
import styles from "./ForthScreen.module.css"

const ForthScreen=()=>{


return <>
<div className={styles.title}>אתן שואלות, אני עונה</div>
 <FAQItem question="כמה מלוות את מאפשרת?" answer="עד 3 + כלה"/> 
 <FAQItem question="כמה מלוות את מאפשרת?" answer="עד 3 + כלה"/> 
 <FAQItem question="כמה מלוות את מאפשרת?" answer="עד 3 + כלה"/> 
 <FAQItem question="כמה מלוות את מאפשרת?" answer="עד 3 + כלה"/> 
 <FAQItem question="כמה מלוות את מאפשרת?" answer="עד 3 + כלה"/> 
    <Button text="סתיו,בואי נדבר!"/>
</>


}
export default ForthScreen