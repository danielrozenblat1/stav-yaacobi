import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from "./SecondScreen.module.css";
import listen from "../images/לא מקשיבים.png"
import over from "../images/איפור גס.png"
import makeup from "../images/מתאים.png"
import withYou from "../images/איתך.png"
import happy from "../images/רוגע.png"
import questions from "../images/מענה.png"
import secure from "../images/בטחון.png"

const SecondScreen = () => {
  const concerns = [
    { text: "שלא יהיו קשובים לצרכים ולדגשים שלך", image: listen },
    { text: "שהאיפור ייצא גס ולא תואם לך", image: over }
  ];

  const solutions = [
    { text: "להבין איזה סגנון איפור ושיער את מחפשת", image: makeup },
    { text: "לתאם איתך ציפיות כדי להבין בדיוק איך את הולכת להראות", image: withYou},
    { text: "להוריד סטרס גם לפני החופה לעמוד בזמנים ולהיות לצדך לאורך היום החשוב בחייך", image: happy},
    { text: "להיות זמינה לכל שאלה,חשש והתייעצויות", image: questions },
    { text: "לתת לך בטחון!", image: secure }
  ];

  useEffect(() => {
    ScrollReveal().reveal('.reveal-image', {
      origin: 'right',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.reveal-text', {
      origin: 'left',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out'
    });
  }, []);

  const renderPairs = (items) => {
    return items.reduce((acc, item, index) => {
      if (index % 2 === 0) {
        acc.push(
          <div key={index} className={styles.pairContainer}>
            {renderItem(item, index)}
            {items[index + 1] && renderItem(items[index + 1], index + 1)}
          </div>
        );
      }
      return acc;
    }, []);
  };

  const renderItem = (item, index) => (
    <div key={index} className={styles.item}>
      <img src={item.image} alt="" className={`${styles.itemImage} reveal-image`} />
      <p className="reveal-text">{item.text}</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.solutionTitle}>אני יודעת ששני הדברים שהכי מפחידים אותך הם:</h2>
      <div className={styles.concernsContainer}>
        {renderPairs(concerns)}
      </div>
      <h1 className={styles.mainTitle}>ובשביל זה אני כאן:</h1>
      <div className={styles.solutionsContainer}>
        {renderPairs(solutions)}
      </div>
    </div>
  );
};

export default SecondScreen;