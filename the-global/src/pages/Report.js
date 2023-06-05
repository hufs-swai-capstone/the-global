import React, { useState } from "react";
import "../styles/ResultStyle.css";

function Report() {
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

  const sample = {
    period: "2016/2학기",
    program: "교환학생",
    country: "홍콩",
    university: "홍콩폴리텍대학교",
    satisfaction: "10/10",
    courseRegistration: "신청 희망 교과목 리스트 제출",
    dorm: "신청 가능",
    dormInfo:
      "기숙사는 2인 1실이며, 두 개의 방이 가운데 화장실을 중심으로 연결되어 있습니다. 화장실은 변기/샤워실/세면대가 분리되어 있기 때문에 큰 불편함은 없으나 스위트메이트(화장실 공유하는 옆 방 사람)가 예민하다면 샤워시간 등을 의논해야 합니다. 세탁/건조기와 에어컨은 학생증에 돈을 충전하여 이용합니다. 취식은 당연히 방에서도 가능하지만 조리는 각 층의 홀에서만 가능합니다. 신청을 하면 짐에서 운동할 수 있고, 수영복이 있다면 수영장도 이용 가능합니다. 전에는 와이파이 공유기가 없었으나 12월 새로 달았기 때문에 따로 개인 공유기가 필요하지 않습니다. 다만 기숙사에서는 휴대전화 데이터가 터지지 않습니다.",
    visaPeriod: "기타",
    visaType: "학생비자",
    insurance: "국내보험업체",
    beforeDeparture:
      "비자신청은 학교 측에서 보낸 폼에 예시를 따라 채우기만 하면 됩니다. 지원서 제출시 파일로 업로드하면 학교에서 입학허가서와 함께 비자를 보내줍니다. 저는 학기가 끝난 후에 여행 계획이 있어 편도 항공권을 구입하였는데, 왕복 티켓이 없어도 입국할 때 문제 없고, 변수가 생길 수 있으니 편도나 오픈티켓을 구입을 추천합니다. 기숙사 입소 날짜가 나오면 그에 맞춰 항공권을 구입하면 됩니다. 기숙사 입소일 다음날이 오리엔테이션입니다. 보험사 다이렉트로는 학교에서 요구하는 조건을 충족하는 보험 가입이 불가능하니 에이전시를 통해 가입하는 것이 낫습니다.",
    admissionLetter:
      "항목을 꼼꼼하게 채우면 큰 문제는 없으니 잘 확인하고 작성하면 됩니다. 우편물 받을 주소는 학교 국제교류팀으로 하는 것이 가장 좋습니다. 간혹 수강과 관련하여 해당 과목 교수님들이 CV를 확인하는 경우가 있으니 CV작성시 언어능력과 학업과 관련된 내용을 많이 적는 게 좋을 것 같습니다.",
    transportation:
      "A21이나 E23 버스를 타면 기숙사 가까이에서 내려줍니다. 하지만 대체로 학교에서 맺어준 버디가 공항으로 마중을 나옵니다. 학교에서 스타트업 가이드도 보내주니 걱정할 필요 없습니다.",
    course:
      "2학년 수업인 2000 단위 수업과 3학년 수업인 3000 단위 수업의 수준차가 매우 심한 편입니다. 제가 들은 모든 수업은 대체로 시험1회+팀플(프레젠테이션)+페이퍼로 평가가 이루어졌습니다. 얘기를 들어보니 팀플을 안하는 수업이 거의 없는 것 같습니다. 교환학생이 들을 수 있는 수업은 따로 정해져 있는데 이 수업들은 전부 영어 수업입니다. 간혹 광둥어나 보통화를 수업 중에 섞어서 하시는 교수님이 계시는데 중요한 내용은 아니니 걱정할 필요 없습니다. 수업은 총 13주동안 이루어지지만 기말고사 날짜가 제각각이기 때문에 종강 시기는 학생별로 상이합니다. 예를 들어 저같은 경우에 12월에는 페이퍼 제출 외에는 학교에 갈 일이 없었습니다.",
    schoolActivities:
      "학교에서는 교환학생들을 위해 많은 프로그램을 준비합니다. 외국인 친구들과 추억을 만들 수 있는 좋은 기회이기 때문에 가능한 많이 참여하는 것을 추천합니다. 시티투어는 친구나 가족 등 나중에 갈 기회가 많은 곳을 가기 때문에 굳이 신청할 필요는 없으나 그 외에 한국인에게 잘 알려지지 않은 홍콩의 곳곳을 탐방하거나 문화와 관련된 행사는 가는 것이 좋다고 생각합니다. 또 기숙사 댄스동아리 등 기숙사에서 할 수 있는 활동도 있습니다.",
    totalCost: "300 (100 + 200 + 교환학생이라 수업료 없음)",
    airfare: "편도16 (한국→홍콩만)",
    insuranceCost: "30",
    otherCost: "60~70 (세탁/에어컨/투어 등 프로그램 참여비용/생필품 등)",
    etc: "급식이 나오는 고등학교 기숙사가 아닌 대학 기숙사나 자취의 경험이 없는 분들은 지출이 예상보다 크다는 것을 알고 있어야 할 것 같습니다. 밥을 해먹으면 식비 지출은 줄일 수 있습니다.",
    addition:
      "학교에서는 교환학생들을 위해 많은 프로그램을 준비합니다. 외국인 친구들과 추억을 만들 수 있는 좋은 기회이기 때문에 가능한 많이 참여하는 것을 추천합니다. 시티투어는 친구나 가족 등 나중에 갈 기회가 많은 곳을 가기 때문에 굳이 신청할 필요는 없으나 그 외에 한국인에게 잘 알려지지 않은 홍콩의 곳곳을 탐방하거나 문화와 관련된 행사는 가는 것이 좋다고 생각합니다. 또 기숙사 댄스동아리 등 기숙사에서 할 수 있는 활동도 있습니다.",
  };
  return (
    <div>
      <div className="top">
        <p className="title">
          {sample.period} {sample.university} 귀국보고서
        </p>
      </div>
      <div className="result">

        <p className="infoName" onClick={() => toggleItem("basic")}>
          1. 기본 정보</p>
        <p className={`content ${toggles.basic ? "showContent" : "hideContent"}`}>
          {toggles.basic && (
            <>
              <span className="subinfo">기간</span>
              {sample.period}
              <br />
              <span className="subinfo">종류</span>
              {sample.program}
              <br />
              <span className="subinfo">국가</span>
              {sample.country}
              <br />
              <span className="subinfo">대학</span>
              {sample.university}
              <br />
              <span className="subinfo">만족도</span>
              {sample.satisfaction}
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
              {sample.courseRegistration}
              <br />
              <br />
              {sample.course}
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
              {sample.dorm}
              <br />
              <br />
              {sample.dormInfo}
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
              {sample.visaType}<br />
              <span className="subinfo">발급소요기간</span>
              {sample.visaPeriod}<br />
              <span className="subinfo">보험</span>
              {sample.insurance}<br />
              <br />
              {sample.beforeDeparture}
            </>
          )}
          {!toggles.visaInsure && <span className="hideContent"></span>}                  
        </p>

        <p className="infoName" onClick={() => toggleItem("admissionLetter")}>
          5. 입학하가서</p>
        <p className={toggles.admissionLetter ? "showContent" : "hideContent"}>
          {sample.admissionLetter}</p>

        <p className="infoName" onClick={() => toggleItem("transportation")}>
          6. 교통편</p>
        <p className={toggles.transportation ? "showContent" : "hideContent"}>
          {sample.transportation}</p>

        <p className="infoName" onClick={() => toggleItem("schoolActivities")}>
          7. 교내활동</p>
        <p className={toggles.schoolActivities ? "showContent" : "hideContent"}>
          {sample.schoolActivities}</p>

        <p className="infoName" onClick={() => toggleItem("cost")}>
          8. 비용</p>
        <p className={`content ${toggles.cost ? "showContent" : "hideContent"}`}>
          {toggles.cost && (
            <>
              <span className="subinfo">총 비용</span>
              {sample.totalCost}
              <br />
              <span className="subinfo">항공비</span>
              {sample.airfare}
              <br />
              <span className="subinfo">보험비</span>
              {sample.insuranceCost}
              <br />
              <span className="subinfo">기타 비용</span>
              {sample.otherCost}
              <br />
              <br />
              {sample.etc}
            </>
          )}
          {!toggles.cost && <span className="hideContent"></span>}
        </p>

        <p className="infoName" onClick={() => toggleItem("addition")}>
          7. 하고 싶은 말</p>
        <p className={toggles.addition ? "showContent" : "hideContent"}>
          {sample.addition}</p>
        
      </div>
    </div>
  );
}

export default Report;
