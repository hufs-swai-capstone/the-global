import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";

// pages
import Main from "./pages/Main";
import MenuIntro from "./pages/Menu_Intro";
import ReturnReportSearch from "./pages/ReturnReportSearch.js";
import SatisfactionSearch from "./pages/SatisfactionSearch.js";
import MenuDocument from "./pages/Menu_Document";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/intro" element={<MenuIntro />} />
        <Route path="/return-report-search" element={<ReturnReportSearch />} />
        <Route path="/satisfaction-search" element={<SatisfactionSearch />} />
        <Route path="/document" element={<MenuDocument />} />
      </Routes>
    </>
  );
}

export default App;
