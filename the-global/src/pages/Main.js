//created by Jisu

import MenuButton from "../components/MenuButton";
import HufsLogo from "../components/HufsLogo";
import styles from "../styles/Main.module.css";
import { Link, useNavigate } from "react-router-dom";


function Main() {
    const navigate = useNavigate();
    
    const moveIntroPage = () => {
        navigate("/intro");
    }

    const moveDocumentPage = () => {
        navigate("/document");
    }

    return (
        <div>
            <div className={styles.introduction}>
                <img src="images/logo.png" alt="더 글로벌 로고" className={styles.theGlobalLogo} />
                <div className={styles.introductionTitle}>
                    <h2>Come to HUFS<br /> Meet the World!</h2>
                </div>
                <div className={styles.introductionDescription}>
                    <span>교환학생 지원 준비부터</span><br /><span>파견준비, 학점인정까지 모두 한 곳에서!</span>
                </div>
            </div>

            <div className={styles.MenuButtons}>
                <p className={styles.MenuButtonGuide}>이용하고 싶은 기능을 선택하세요!</p>
                    <div onClick={moveIntroPage}>
                    <MenuButton 
                        imgSrc={"./images/owl1.png"}
                        text={"프로그램 소개"}
                        description1={"교환학생과 7+1이 무엇인가요?"}
                        description2={"선발은 어떻게 이루어지나요?"}
                    />
                    </div>
                
           
                <div>
                <MenuButton
                    imgSrc={"./images/owl2.png"}
                    text={"검색"}
                    description1={"국가/학교별 후기 검색"}
                    description2={"강의 후기"}
                />
                </div>
                
                <div onClick={moveDocumentPage}>
                <MenuButton
                    imgSrc={"./images/owl3.png"}
                    text={"준비해야 할 서류"}
                    description1={"선발 후 준비해야 할 서류"}
                    description2={"학점인정을 위해 필요한 서류"}
                    />
                </div>
            </div>
            <HufsLogo />
        </div>
    );
}

export default Main;