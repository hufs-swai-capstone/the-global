import React, { useEffect, useState } from "react";
import jsonData from "../data/Course.json";
import "../styles/ResultStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Result(props) {
  const lis = [];

  if (props.filteredData.length === 0) {
    lis.push(
      <div className="noResult">No Result</div>
    )
  };

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
  const [filteredData, setFilteredData] = useState([]);
  const selected_data = useLocation().state.selected_data;

  const navigate = useNavigate();
  const backbtnclick = () => {
    navigate("/satisfaction-search");
  }

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if ('name' in selected_data) {
      const filtered = data.filter((item) => item.courseName.includes(selected_data.name));
      setFilteredData(filtered);
    } else {
      const { order, ...filters } = selected_data;
  
      const filtered = data.filter((item) => {
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
  
      if (order === "만족도 낮은 순") {
        filtered.sort((a, b) => a.satisfaction - b.satisfaction);
      } else if (order === "학점 높은 순") {
        filtered.sort((a, b) => b.credit - a.credit);
      } else if (order === "학점 낮은 순") {
        filtered.sort((a, b) => a.credit - b.credit);
      } else {
        filtered.sort((a, b) => b.satisfaction - a.satisfaction);
      }
  
      setFilteredData(filtered);
    }
  }, [data]);

  return (
    <div>
      <div className="top">
        <p className="title">강의 검색 결과</p>
        <button className="backbtn" onClick={backbtnclick}>✖</button>
      </div>
      <div className="show">
        <Result filteredData={filteredData}></Result>
      </div>
    </div>
  );
}

export default SearchResult;
