// created by Jisu

import styles from "../styles/SubContent.module.css";

function SubContent({subTitle, detail}) {
    return (
        <div className={styles.subContent}>
            <p className={styles.subTitle}>{subTitle}</p>
            <p className={styles.detail}>{detail}</p>
        </div>
    );
}
export default SubContent;