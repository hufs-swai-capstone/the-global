import MenuButtonSquare from "../components/MenuButtonSquare";
import HufsLogo from "../components/HufsLogo";
import styles from "../styles/Main.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function Main() {
  const navigate = useNavigate();

  const moveIntroPage = () => {
    navigate("/intro");
  };

  const moveDocumentPage = () => {
    navigate("/document");
  };

  const moveReturnReportSearchPage = () => {
    navigate("/return-report-search");
  };

  const moveSatisfactionSearchPage = () => {
    navigate("/satisfaction-search");
  };

  return (
    <div className={styles.MenuScreen}>
      <div className={styles.introduction}>
        <img src={logo} alt="더 글로벌 로고" className={styles.theGlobalLogo} />
        <div className={styles.introductionTitle}>
          <h2>
            The Global?
            <br />
            더(More) Global!
          </h2>
        </div>
        <div className={styles.introductionDescription}>
          <span>교환학생 지원 준비부터</span>
          <br />
          <span>파견준비, 학점인정까지 모두 한 곳에서!</span>
        </div>
      </div>

      <div className={styles.MenuButtons}>
        <p className={styles.MenuButtonGuide}>
          이용하고 싶은 기능을 선택하세요!
        </p>
        <div className={styles.MenuButtonBox}>
          <span onClick={moveIntroPage}>
            <MenuButtonSquare
              text={"프로그램 소개"}
              description1={"교환학생과 7+1 차이"}
              description2={"선발 절차"}
            />
          </span>
          <span onClick={moveReturnReportSearchPage}>
            <MenuButtonSquare
              text={"국가/학교별\n후기 검색"}
              description1={""}
              description2={"국가/학교별 후기 검색"}
            />
          </span>
        </div>

        <div className={styles.MenuButtonBox}>
          <span onClick={moveSatisfactionSearchPage}>
            <MenuButtonSquare
              text={"강의 후기 검색"}
              description1={""}
              description2={"강의 후기"}
            />
          </span>

          <span onClick={moveDocumentPage}>
            <MenuButtonSquare
              text={"절차별 준비 내용"}
              description1={"선발 후 준비사항"}
              description2={"학점인정관련 준비사항"}
            />
          </span>
        </div>
      </div>
      <HufsLogo />
    </div>
  );
}

export default Main;
