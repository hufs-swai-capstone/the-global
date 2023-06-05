// created by Jisu

import MenuButtonRectangular from "../components/MenuButtonRectangular";
import ContentCard from "../components/ContentCard";
import HufsLogo from "../components/HufsLogo";
import styles from "../styles/Menu_Intro.module.css"

function MenuIntro() {
    return (
        <div>
            <div className={styles.menuBtn}>
                <MenuButtonRectangular
                    imgSrc={"../images/owl1.png"}
                    text={"프로그램 소개"}
                    description1={"교환학생과 7+1이 무엇인가요?"}
                    description2={"선발은 어떻게 이루어지나요?"}
                />
            </div>
            <p className={styles.usefulInfo}>2023년도 2학기 국제교류 프로그램 선발 일정<br/>2023.3.2~2023.3.24</p>
                
            <div className={styles.contentSection}>
                <span className={styles.instruction}>카드를 좌우로 넘겨 세부 사항을 확인하세요!</span>
                <div className={styles.contentCards}>
                    <ContentCard
                        title={"교환학생과\n7+1 프로그램의 차이"}
                        subTitle1={"교환학생"}
                        detail1={"한국외대 등록금 납부,\n해외 대학교 등록금 면제"}
                        subTitle2={"7+1 프로그램"}
                        detail2={"한국외대 등록금 면제,\n해외 대학교 등록금 납부"} 
                    />
         
                    <ContentCard
                        title={"선발 절차"}
                        subTitle1={"국제교류팀 선발"}
                        detail1={"언어성적 100 + 총평점평균 100 +\n수학계획서 Pass/Fail\n(단, 언어성적은 파견 언어권에 따라 다름)"}
                        subTitle2={"학과 선발"}
                        detail2={"학과마다 국제교류 관련 내규가 다르므로\n반드시 학과 홈페이지/과사무실 공지 참고"}
                    />
                </div>
            </div>             
            <HufsLogo />
        </div>
        
    );
}


export default MenuIntro;