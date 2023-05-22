// created by Jisu

import ContentCard from "../components/ContentCard";
import HufsLogo from "../components/HufsLogo";
import MenuButton from "../components/MenuButton";
import styles from "../styles/Menu_Document.module.css"


function MenuDocument() {
    return (
        <div>
            <div className={styles.MenuIntroContent}>
                <div className={styles.menuBtn}>
                    <MenuButton
                        imgSrc = {"../images/owl3.png"}
                        text={"귀국 후 학점 인정 절차"}
                        description1={"무사히 국제 교류를 마쳤다면,"}s
                        description2={"마지막 남은 일은 학점 인정 절차!"}
                />
                </div>
                
            <p className={styles.usefulInfo}>2023년도 2학기 국제교류 프로그램 선발 일정<br/>2023.3.2~2023.3.24</p>
            <span className={styles.instruction}>카드를 넘겨 세부 사항을 확인하세요!</span>
            <div className={styles.contentCards}>
                <ContentCard
                    title={"학점 인정 요청서에 학과장 승인 받기"}
                    subTitle1={"지참해야 할 서류"}
                    detail1={"학점 인정 요청서, 본교 성적 증명서, 해외 대학 성적표 원본, 귀국 보고서 출력본"}
                    subTitle2={"참고) 학점 인정 관할"}
                    detail2={"1전공, 자선 - 소속 1전공 학과장 / 이중(부)전공 - 각 해당 전공 학과장 / 교양 - 교양대학장"} 
                />
            </div>
            </div>
            <HufsLogo />
        </div>
        
    );
}

export default MenuDocument;