import React, { useEffect, useState } from "react";
import jsonData from "../data/Course.json";
import "../styles/ResultStyle.css";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Result(props) {
  const lis = [];
  for (let i = 0; i < props.filteredData.length; i++) {
    let temp = props.filteredData[i];

    lis.push(
      <div className="result">
        <div className="basicinfo">
          <ol className="infoList">
            <li className="info">{temp.period}</li>;
            <li className="info">{temp.country}</li>;
            <li className="info">{temp.university}</li>;
          </ol>
        </div>
        <div className="name">{temp.courseName}</div>
        <div className="second">
          <div className="code">{temp.courseCode}</div>
          <div className="credit">{temp.credit}학점</div>
        </div>
        <div className="third">
          <Star star={temp.satisfaction}></Star>
          <div className="satisfaction">{temp.satisfaction}/10</div>
        </div>
      </div>
    );
  }
  return <div>{lis}</div>;
}

function Star(props) {
  const lis = [];
  for (let i = 0; i < Math.floor(props.star / 2); i++) {
    lis.push(<BsStarFill className="star"></BsStarFill>);
  }
  if (props.star % 2 !== 0) {
    lis.push(<BsStarHalf className="star"></BsStarHalf>);
  }
  while (lis.length < 5) {
    lis.push(<BsStar className="star"></BsStar>);
  }

  return <div>{lis}</div>;
}

function SearchResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const selected_data = {
    country: "러시아",
    university: "전체",
    order: "만족도 높은 순",
  };
  const { order, ...filters } = selected_data;

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

  if (order === "만족도 높은 순") {
    filteredData.sort((a, b) => b.satisfaction - a.satisfaction);
  } else if (order === "만족도 낮은 순") {
    filteredData.sort((a, b) => a.satisfaction - b.satisfaction);
  } else if (order === "학점 높은 순") {
    filteredData.sort((a, b) => b.credit - a.credit);
  } else if (order === "학점 낮은 순") {
    filteredData.sort((a, b) => a.credit - b.credit);
  }

  return (
    <div>
      <div className="top">
        <p className="title">강의 검색 결과</p>
      </div>
      <div className="show">
        <Result filteredData={filteredData}></Result>
      </div>
    </div>
  );
}

export default SearchResult;
