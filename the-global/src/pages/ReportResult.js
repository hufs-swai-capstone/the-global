import React, { useEffect, useState } from "react";
import jsonData from "../data/Data.json";
import "../styles/ResultStyle.css";
import { useLocation, useNavigate } from "react-router-dom"

function Result(props) {
  const lis = [];

  if (props.filteredData.length === 0) {
    lis.push(
      <div className="noResult">No Result</div>
    )
  };
  


  const navigate = useNavigate();
  const resultclick = (content) => {
    navigate("/report", {
      state: { content },
    });
  }

  if (props.content === "visa/insurance") {
    for (let i = 0; i < props.filteredData.length; i++) {
      let temp = props.filteredData[i];
      lis.push(
        <div className="result">
          <div className="basicinfo">
            <ol className="tagList">
              <li className="tag">{temp.period}</li>;
              <li className="tag">{temp.country}</li>;
              <li className="tag">{temp.university}</li>;
            </ol>
          </div>
          <div className="content" onClick={() => resultclick(temp)}>
            <span className="subinfo">비자</span>
            {temp.visaType}<br />
            <span className="subinfo">발급소요기간</span>
            {temp.visaPeriod}<br />
            <span className="subinfo">보험</span>
            {temp.insurance}<br />
            <br />
            {temp.beforeDeparture}
          </div>      
        </div>
      );
    }; 
  } else if (props.content === "dorm") {
    for (let i = 0; i < props.filteredData.length; i++) {
      let temp = props.filteredData[i];
      lis.push(
        <div className="result">
          <div className="basicinfo">
            <ol className="tagList">
              <li className="tag">{temp.period}</li>;
              <li className="tag">{temp.country}</li>;
              <li className="tag">{temp.university}</li>;
            </ol>
          </div>
          <div className="content" onClick={() => resultclick(temp)}>
            <span className="subinfo">신청</span>
            {temp.dorm}
            <br /><br />
            {temp.dormInfo}
          </div>      
        </div>
      );
    }; 
  } else if (props.content === "cost") {
    for (let i = 0; i < props.filteredData.length; i++) {
      let temp = props.filteredData[i];
      lis.push(
        <div className="result">
          <div className="basicinfo">
            <ol className="tagList">
              <li className="tag">{temp.period}</li>;
              <li className="tag">{temp.country}</li>;
              <li className="tag">{temp.university}</li>;
            </ol>
          </div>
          <div className="content" onClick={() => resultclick(temp)}>
          <span className="subinfo">총 비용</span>
            {temp.totalCost}
            <br />
            <span className="subinfo">항공비</span>
            {temp.airfare}
            <br />
            <span className="subinfo">보험비</span>
            {temp.insuranceCost}
            <br />
            <span className="subinfo">기타 비용</span>
            {temp.otherCost}
          </div>      
        </div>
      );
    }; 
  } else {
    for (let i = 0; i < props.filteredData.length; i++) {
      let temp = props.filteredData[i];
      lis.push(
        <div className="result">
          <div className="basicinfo">
            <ol className="tagList">
              <li className="tag">{temp.period}</li>;
              <li className="tag">{temp.country}</li>;
              <li className="tag">{temp.university}</li>;
            </ol>
          </div>
          <div className="content" onClick={() => resultclick(temp)}>
            {temp[props.content]}
          </div>      
        </div>
      );
    };
  };
  return <div>{lis}</div>;
}

function ReportResult() {
  const [data, setData] = useState([]);
  const selected_data = useLocation().state.selected_data;

  const navigate = useNavigate();
  const backbtnclick = () => {
    navigate("/return-report-search");
  }

  useEffect(() => {
    setData(jsonData);
  }, []);

  const { selected_information, ...filters } = selected_data;

  const filteredData = data.filter((item) => {
    for (const key in filters) {
      if (filters[key] === "") {
        continue;
      }
      if (item[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });

  return (
    <div>
      <div className="top">
        <p className="title">귀국보고서 검색 결과</p>
        <p className="count">{filteredData.length}건</p>
        <button className="backbtn" onClick={backbtnclick}>✖</button>
      </div>
      <div className="show">
        <Result
          filteredData={filteredData}
          content={selected_information}
        ></Result>
      </div>
    </div>
  );
}

export default ReportResult;
