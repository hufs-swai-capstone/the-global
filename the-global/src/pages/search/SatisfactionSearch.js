import React, { useState } from "react";

// conponents
import SearchLectures from "../../components/search/SearchLectures";
import SearchConditions from "../../components/search/SearchConditions";

// style
import styled from "styled-components";
import { Container, SearchButton, ButtonText } from "../../styles/SearchStyle";

// icon
import SearchIcon from "@mui/icons-material/Search";

const SatisfactionSearch = () => {
  return (
    <>
      <SearchLectures />
      <SearchConditions />
      <Container>
        <SearchButton>
          <ButtonText>검색</ButtonText>
          <SearchIcon />
        </SearchButton>
      </Container>
    </>
  );
};

export default SatisfactionSearch;
