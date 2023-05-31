import React, { useEffect, useState } from "react";
import jsonData from "../data/Data.json";
import "../styles/ResultStyle.css";

function Result(props) {
  const lis = [];

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
        <div className="content">{temp[props.content]}</div>
      </div>
    );
  }
  return <div>{lis}</div>;
}

function ReportResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selected_data = {
    period: "2017/2학기",
    program: "파견학생(학과)",
    country: "러시아",
    university: "전체",
    selected_information: "addition",
  };
  const { selected_information, ...filters } = selected_data;

  const filteredData = data.filter((item) => {
    for (const key in filters) {
      if (filters[key] === "전체") {
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
