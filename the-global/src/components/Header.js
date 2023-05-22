import React from "react";
import { useNavigate } from "react-router-dom";

// style
import styled from "styled-components";

// icons
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate("/");
  };

  const handleTravelExploreClick = () => {
    alert("한국외국어대학교 국제교류팀 페이지로 이동합니다.");
    window.open("https://oia.hufs.ac.kr", "_blank");
  };

  return (
    <HeaderContainer>
      <HomeIconWrapper>
        <HomeIcon onClick={redirectToMainPage} />
      </HomeIconWrapper>
      <IconWrapper>
        <TravelExploreIcon onClick={handleTravelExploreClick} />
        <PersonIcon />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeIconWrapper = styled.div`
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > *:hover {
    cursor: pointer;
  }
`;
