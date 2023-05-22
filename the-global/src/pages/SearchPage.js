import React, { useState } from "react";
import styled from "styled-components";

// style
import {
  Container,
  Heading,
  InputContainer,
  SelectContainer,
  Label,
  Select,
  SearchButton,
  ButtonText,
} from "../styles/SearchStyle";

// data
import searchData from "../data/search.json";

// icon
import SearchIcon from "@mui/icons-material/Search";

const SearchPage = () => {
  const { periods, programs, countries, universities, informations } =
    searchData;

  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedInfo, setSelectedInfo] = useState("");

  const handlePeriodChange = (e) => {
    const value = e.target.value;
    setSelectedPeriod(value);
  };

  const handleProgramChange = (e) => {
    const value = e.target.value;
    setSelectedProgram(value);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setSelectedUniversity("");
  };

  const handleUniversityChange = (e) => {
    const value = e.target.value;
    setSelectedUniversity(value);
  };

  const handleInfoChange = (e) => {
    const value = e.target.value;
    setSelectedInfo(value);
  };

  const handleSearch = () => {
    console.log("Selected Period:", selectedPeriod);
    console.log("Selected Program:", selectedProgram);
    console.log("Selected Country:", selectedCountry);
    console.log("Selected University:", selectedUniversity);
    console.log("Selected Info:", selectedInfo);
  };

  handleSearch();

  return (
    <Container>
      <Heading>귀국보고서 검색</Heading>
      <InputContainer>
        <SelectContainer>
          <Label htmlFor="period">기간</Label>
          <Select
            id="period"
            value={selectedPeriod}
            onChange={handlePeriodChange}
          >
            {periods.map((period, index) => (
              <option key={index} value={period}>
                {period}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="program">프로그램 종류</Label>
          <Select
            id="program"
            value={selectedProgram}
            onChange={handleProgramChange}
          >
            {programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="country">국가 *</Label>
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
          <Label htmlFor="university">대학 *</Label>
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
          <Label htmlFor="selectedInfo">희망 정보 선택</Label>
          <Select
            id="selectedInfo"
            value={selectedInfo}
            onChange={handleInfoChange}
          >
            {informations.map((info, index) => (
              <option key={index} value={info}>
                {info}
              </option>
            ))}
          </Select>
        </SelectContainer>
      </InputContainer>
      <SearchButton>
        <ButtonText>검색</ButtonText>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default SearchPage;
