// created by Jisu

import PropTypes from "prop-types";
import styles from "../styles/MenuButtonRectangular.module.css";

function MenuButtonRectangular({imgSrc, text, description1, description2}) {
    return (
        <button className={styles.menuBtn}>
            <span className={styles.menuBtnContent}>
                <img src={imgSrc} className={styles.icon} alt={text} />
                <div className={styles.textArea}>
                    <p className={styles.text}>{text}</p>
                    <span className={styles.description}>{description1}</span><br />
                    <span className={styles.description}>{description2}</span>
                </div>
            </span>
            
        
        </button>
        
    )
};

MenuButtonRectangular.propTypes = {
    text: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string
}

export default MenuButtonRectangular;