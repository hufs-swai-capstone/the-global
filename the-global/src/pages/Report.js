import React, { useState } from "react";
import "../styles/ResultStyle.css";
import { useLocation } from "react-router-dom"

function Report() {
  const content = useLocation().state.content;

  const [toggles, setToggles] = useState({
    basic: true,
    course: true,
    dorm: true,
    visaInsure: true,
    admissionLetter: true,
    transportation: true,
    schoolActivities: true,
    cost: true,
    addition: true,
  });

  const toggleItem = (item) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [item]: !prevToggles[item],
    }));
  };

  return (
    <div>
      <div className="top">
        <p className="title">
          {content.period} {content.university} 귀국보고서
        </p>
      </div>
      <div className="result">

        <p className="infoName" onClick={() => toggleItem("basic")}>
          1. 기본 정보</p>
        <p className={`content ${toggles.basic ? "showContent" : "hideContent"}`}>
          {toggles.basic && (
            <>
              <span className="subinfo">기간</span>
              {content.period}
              <br />
              <span className="subinfo">종류</span>
              {content.program}
              <br />
              <span className="subinfo">국가</span>
              {content.country}
              <br />
              <span className="subinfo">대학</span>
              {content.university}
              <br />
              <span className="subinfo">만족도</span>
              {content.satisfaction}
            </>
          )}
          {!toggles.course && <span className="hideContent"></span>}
        </p>

        <p className="infoName" onClick={() => toggleItem("course")}>
          2. 수업</p>
        <p className={`content ${toggles.course ? "showContent" : "hideContent"}`}>
          {toggles.course && (
            <>
              <span className="subinfo">수강신청</span>
              {content.courseRegistration}
              <br />
              <br />
              {content.course}
            </>
          )}
          {!toggles.course && <span className="hideContent"></span>}
        </p>

        <p className="infoName" onClick={() => toggleItem("dorm")}>
          3. 기숙사</p>
        <p className={`content ${toggles.dorm ? "showContent" : "hideContent"}`}>
          {toggles.dorm && (
            <>
              <span className="subinfo">신청</span>
              {content.dorm}
              <br />
              <br />
              {content.dormInfo}
            </>
          )}
          {!toggles.dorm && <span className="hideContent"></span>}
        </p>
        
        <p className="infoName" onClick={() => toggleItem("visaInsure")}>
          4. 비자/보험</p>
        <p className={`content ${toggles.visaInsure ? "showContent" : "hideContent"}`}>
          {toggles.visaInsure && (
            <>
              <span className="subinfo">비자</span>
              {content.visaType}<br />
              <span className="subinfo">발급소요기간</span>
              {content.visaPeriod}<br />
              <span className="subinfo">보험</span>
              {content.insurance}<br />
              <br />
              {content.beforeDeparture}
            </>
          )}
          {!toggles.visaInsure && <span className="hideContent"></span>}                  
        </p>

        <p className="infoName" onClick={() => toggleItem("admissionLetter")}>
          5. 입학하가서</p>
        <p className={toggles.admissionLetter ? "showContent" : "hideContent"}>
          {content.admissionLetter}</p>

        <p className="infoName" onClick={() => toggleItem("transportation")}>
          6. 교통편</p>
        <p className={toggles.transportation ? "showContent" : "hideContent"}>
          {content.transportation}</p>

        <p className="infoName" onClick={() => toggleItem("schoolActivities")}>
          7. 교내활동</p>
        <p className={toggles.schoolActivities ? "showContent" : "hideContent"}>
          {content.schoolActivities}</p>

        <p className="infoName" onClick={() => toggleItem("cost")}>
          8. 비용</p>
        <p className={`content ${toggles.cost ? "showContent" : "hideContent"}`}>
          {toggles.cost && (
            <>
              <span className="subinfo">총 비용</span>
              {content.totalCost}
              <br />
              <span className="subinfo">항공비</span>
              {content.airfare}
              <br />
              <span className="subinfo">보험비</span>
              {content.insuranceCost}
              <br />
              <span className="subinfo">기타 비용</span>
              {content.otherCost}
              <br />
              <br />
              {content.etc}
            </>
          )}
          {!toggles.cost && <span className="hideContent"></span>}
        </p>

        <p className="infoName" onClick={() => toggleItem("addition")}>
          7. 하고 싶은 말</p>
        <p className={toggles.addition ? "showContent" : "hideContent"}>
          {content.addition}</p>
        
      </div>
    </div>
  );
}

export default Report;
