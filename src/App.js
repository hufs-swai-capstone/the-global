import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";

// pages
import Main from "./pages/Main";
import MenuIntro from "./pages/Menu_Intro";
import ReturnReportSearch from "./pages/search/ReturnReportSearch.js";
import SatisfactionSearch from "./pages/search/SatisfactionSearch.js";
import MenuDocument from "./pages/Menu_Document";
import Report from "./pages/Report";
import ReportResult from "./pages/ReportResult";
import CourseResult from "./pages/CourseResult";

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
        <Route path="/report" element={<Report />} />
        <Route path="/report-result" element={<ReportResult />} />
        <Route path="/course-result" element={<CourseResult />} />
      </Routes>
    </>
  );
}

export default App;
