// created by Jisu

import ContentCard from "../components/ContentCard";
import HufsLogo from "../components/HufsLogo";
import MenuButtonRectangular from "../components/MenuButtonRectangular";
import styles from "../styles/Menu_Document.module.css"
import owl3 from "../images/owl3.png";


function MenuDocument() {
    return (
        <div>
            <div className={styles.menuBtn}>
                <MenuButtonRectangular
                    imgSrc = {owl3}
                    text={"각 절차별 준비해야 할 서류"}
                    description1={"선발 후 준비해야하는 서류"}
                    description2={"학점 인정을 위해 필요한 서류"}
                />
            </div>        
            <p className={styles.usefulInfo}>2023년도 2학기 국제교류 프로그램 선발 일정<br />2023.3.2~2023.3.24</p>
                
            <div className={styles.contentSection}>
                <span className={styles.instruction}>카드를 좌우로 넘겨 세부 사항을 확인하세요!</span>
                <div className={styles.contentCards}>
                    <ContentCard
                        title={"선발 후 준비해야 하는 서류"}
                        subTitle1={"파견 전 반드시 해야하는 것들"}
                        detail1={"종합정보시스템에 서약서 제출,\n한국외대 국제교류팀 네이버 카페 가입\n(파견될 학교 게시판 새글 알림설정 추천)\n사전 학점 인정 신청"}
                        subTitle2={"개인적으로 준비해야하는 것들"}
                        detail2={"비자 취득, 항공권 구매\n\n이외 기숙사, 수강신청 등의 사항은\n파견학교의 공지와 절차를 따를 것"}
                    />
                    <ContentCard
                        title={"학점 인정 절차"}
                        subTitle1={"학점 인정 요청서 작성 및 준비"}
                        detail1={"<학점 인정 요청서, 본교 성적 증명서,\n해외 대학 성적표 원본,\n귀국 보고서 출력본>\n위의 서류들을 지참해\n학점 인정 요청서에 학과장 승인 받기"}
                        subTitle2={"참고) 학점 인정 관할"}
                        detail2={"1전공, 자선 - 소속 1전공 학과장\n이중(부)전공 - 각 해당 전공 학과장\n교양 - 교양대학장"} 
                />
                </div>
            </div>
            <HufsLogo />
        </div>
        
    );
}

export default MenuDocument;