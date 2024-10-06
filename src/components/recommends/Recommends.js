import styles from "./Recommends.module.css"
import result1 from "../../images/סתיו יעקבי כלה והמלצה 1.png"
import result2 from "../../images/סתיו יעקבי כלה והמלצה 2.png"
import result3 from "../../images/סתיו יעקבי כלה והמלצה 3.png"
import result4 from "../../images/סתיו יעקבי כלה והמלצה 4.png"
import result5 from "../../images/סתיו יעקבי כלה והמלצה 5.png"
import result6 from "../../images/סתיו יעקבי כלה והמלצה 6.png"
import result7 from "../../images/סתיו יעקבי כלה והמלצה 7.png"
import result8 from "../../images/סתיו יעקבי כלה והמלצה 8.png"
import result9 from "../../images/סתיו יעקבי כלה והמלצה 9.png"
import result10 from "../../images/סתיו יעקבי כלה והמלצה 10.png"
import result11 from  "../../images/סתיו יעקבי כלה והמלצה 11.png"
import result12 from  "../../images/סתיו יעקבי כלה והמלצה 12.png"
import result13 from  "../../images/סתיו יעקבי כלה והמלצה 13.png"
import result14 from  "../../images/סתיו יעקבי כלה והמלצה 14.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"

const Recommends=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
   
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
    
        {
          type: 'image',
          src: result8,
        },
 
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title} id="כלה לעתיד">לפני שנתחיל, תשמעי קצת מהן</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`סתיו יעקבי לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

<Button text="סתיו, אני רוצה לשמוע עוד"/>
</>


}
export default Recommends