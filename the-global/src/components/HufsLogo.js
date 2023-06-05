//created by Jisu

import styles from "../styles/HufsLogo.module.css";

function HufsLogo() {
    return (
        <div className={styles.logoArea}>
            <img src="images/hufs_logo.gif" alt="한국외대 로고" className={styles.logo} />
        </div>
    );
}

export default HufsLogo;