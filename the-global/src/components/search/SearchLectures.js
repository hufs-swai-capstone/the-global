import React, { useEffect, useState } from "react";

// style
import styled from "styled-components";
import {
  Container,
  Heading,
  SearchContiner,
  TextInput,
} from "../../styles/SearchStyle";

// icon
import SearchIcon from "@mui/icons-material/Search";

const SearchLectures = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <Container>
      <Heading>강의 명으로 검색</Heading>
      <SearchContiner>
        <TextInput
          type="text"
          placeholder="강의 명을 입력하세요."
          value={searchText}
          onChange={handleInputChange}
        />
        <SearchIcon />
      </SearchContiner>
    </Container>
  );
};

export default SearchLectures;
