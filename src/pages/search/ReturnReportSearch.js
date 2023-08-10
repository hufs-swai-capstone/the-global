import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Heading,
  InputContainer,
  SelectContainer,
  Label,
  Select,
  SearchButton,
  ButtonText,
} from "../../styles/SearchStyle";

// data
import searchData from "../../data/search.json";

// icon
import SearchIcon from "@mui/icons-material/Search";

const ReturnReportSearch = () => {
  const navigate = useNavigate();

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

  const handleSearchClick = () => {
    if (checkRequiredValues()) {
      replaceUnselectedWithAll();

      const selected_data = {
        period: `${selectedPeriod}`,
        program: `${selectedProgram}`,
        country: `${selectedCountry}`,
        university: `${selectedUniversity}`,
        selected_information: `${informations[selectedInfo]}`,
      };

      navigate("/report-result", {
        state: { selected_data },
      });
    }
  };

  const checkRequiredValues = () => {
    if (selectedCountry === "") alert("국가를 선택해주세요.");
    else if (selectedUniversity === "") alert("대학을 선택해주세요.");
    else if (selectedInfo === "") alert("희망 정보를 선택해주세요.");
    else return true;
  };

  const replaceUnselectedWithAll = () => {
    if (selectedPeriod === "") setSelectedPeriod("전체");
    if (selectedProgram === "") setSelectedProgram("전체");
  };

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
              <option key={period} value={period}>
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
              <option key={program} value={program}>
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
              <option key={country} value={country}>
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
                <option key={university} value={university}>
                  {university}
                </option>
              ))}
            </Select>
          )}
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="selectedInfo">희망 정보 선택 *</Label>
          <Select
            id="selectedInfo"
            required
            value={selectedInfo}
            onChange={handleInfoChange}
          >
            <option disabled value="">
              희망 정보 선택
            </option>
            {Object.keys(informations).map((info, index) => (
              <option key={info} value={info}>
                {info}
              </option>
            ))}
          </Select>
        </SelectContainer>
      </InputContainer>
      <SearchButton onClick={handleSearchClick}>
        <ButtonText>검색</ButtonText>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default ReturnReportSearch;
