//Created by Jisu

import SubContent from "../components/SubContent";
import styles from "../styles/ContentCard.module.css";

function ContentCard({ title, subTitle1, detail1, subTitle2, detail2}) {
    return (
        <div className={styles.contentCardBody}>
            <div className={styles.contentCard}>
            <h3 className={styles.title}>{title}</h3>
                <SubContent subTitle={subTitle1} detail={detail1} />
                <SubContent subTitle={subTitle2} detail={detail2} />
            </div>
        </div>
        
    );
}

export default ContentCard;