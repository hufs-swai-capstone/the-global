import React, { useEffect, useState } from "react";

// style
import styled from "styled-components";
import {
  Container,
  Heading,
  InputContainer,
  SelectContainer,
  Label,
  Select,
} from "../../styles/SearchStyle";

// data
import searchData from "../../data/search.json";

const SearchConditions = () => {
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

  useEffect(() => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selected University:", selectedUniversity);
    console.log("Selected Sorting:", selectedSorting);
  }, [selectedCountry, selectedUniversity, selectedSorting]);

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
      </InputContainer>
    </Container>
  );
};

export default SearchConditions;
