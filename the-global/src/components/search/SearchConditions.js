import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import styled from "styled-components";
import {
  Container,
  Heading,
  InputContainer,
  SelectContainer,
  Label,
  Select,
  SearchConditionsButton,
  ButtonText,
} from "../../styles/SearchStyle";

// data
import searchData from "../../data/search.json";

const SearchConditions = () => {
  const navigate = useNavigate();
  const { countries, universities, sorting } = searchData;

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setSelectedUniversity("");
  };

  const handleUniversityChange = (e) => {
    const value = e.target.value;
    setSelectedUniversity(value);
  };

  const handleSortingChange = (e) => {
    const value = e.target.value;
    setSelectedSorting(value);
  };

  const handleSearchClick = () => {
    if (checkRequiredValues()) {
      replaceUnselectedDefault();

      const selected_data = {
        country: `${selectedCountry}`,
        university: `${selectedUniversity}`,
        order: `${selectedSorting}`,
      };

      navigate("/course-result", {
        state: { selected_data },
      });
    }
  };

  const checkRequiredValues = () => {
    if (selectedCountry === "") alert("국가를 선택해주세요.");
    else if (selectedUniversity === "") alert("대학을 선택해주세요.");
    else return true;
  };

  const replaceUnselectedDefault = () => {
    if (selectedSorting === "") setSelectedSorting("만족도 높은 순");
  };

  return (
    <Container>
      <Heading>조건으로 검색</Heading>
      <InputContainer>
        <SelectContainer>
          <Label htmlFor="country">국가</Label>
          <Select
            id="country"
            required
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option disabled value="">
              국가 선택
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="university">대학</Label>
          {selectedCountry === "" ? (
            <Select>
              <option value="">대학 선택</option>)
            </Select>
          ) : (
            <Select
              id="university"
              value={selectedUniversity}
              onChange={handleUniversityChange}
            >
              <option value="">대학 선택</option>
              {universities[selectedCountry].map((university, index) => (
                <option key={index} value={university}>
                  {university}
                </option>
              ))}
            </Select>
          )}
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="sorting">정렬 기준</Label>
          <Select
            id="sorting"
            value={selectedSorting}
            onChange={handleSortingChange}
          >
            {sorting.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SearchConditionsButton>
          <ButtonText onClick={handleSearchClick}>검색</ButtonText>
        </SearchConditionsButton>
      </InputContainer>
    </Container>
  );
};

export default SearchConditions;
