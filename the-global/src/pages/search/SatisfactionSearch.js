import React, { useState } from "react";

// conponents
import SearchLectures from "../../components/search/SearchLectures";
import SearchConditions from "../../components/search/SearchConditions";

// icon
import SearchIcon from "@mui/icons-material/Search";

const SatisfactionSearch = () => {
  return (
    <>
      <SearchLectures />
      <SearchConditions />
    </>
  );
};

export default SatisfactionSearch;
