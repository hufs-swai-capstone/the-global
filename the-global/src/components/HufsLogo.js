//created by Jisu

import styles from "../styles/HufsLogo.module.css";
import hufslogo from "../images/hufs_logo.gif"
function HufsLogo() {
    return (
        <div className={styles.logoArea}>
            <img src={hufslogo} alt="한국외대 로고" className={styles.logo} />
        </div>
    );
}

export default HufsLogo;