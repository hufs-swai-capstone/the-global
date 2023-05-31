// created by Jisu

import PropTypes from "prop-types";
import styles from "../styles/MenuButtonSquare.module.css";

function MenuButtonSquare({text, description1, description2}) {
    return (
        <button className={styles.menuBtn}>
            <span className={styles.menuBtnContent}>
                <div className={styles.textArea}>
                    <p className={styles.text}>{text}</p>
                    <span className={styles.description}>{description1}</span><br />
                    <span className={styles.description}>{description2}</span>
                </div>
            </span>
            
        
        </button>
        
    )
};

MenuButtonSquare.propTypes = {
    text: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string
}

export default MenuButtonSquare;