import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import {
  Container,
  Heading,
  SearchContiner,
  TextInput,
} from "../../styles/SearchStyle";

// icon
import SearchIcon from "@mui/icons-material/Search";

const SearchLectures = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchText !== "") {
      const selected_data = searchText;

      navigate("/course-result", {
        state: selected_data,
      });
    }
  };

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
        <SearchIcon onClick={handleSearchClick} />
      </SearchContiner>
    </Container>
  );
};

export default SearchLectures;
