import React from "react";
import {Routes, Route} from "react-router-dom"
// components
import Header from "./components/Header";

// pages
import Main from "./pages/Main"
import MenuIntro from "./pages/Menu_Intro";
import MenuDocument from "./pages/Menu_Document";
import SearchPage from "./pages/SearchPage";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/intro" element={<MenuIntro/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/document" element={<MenuDocument/>} />
      </Routes>
      
    </>
  );
}

export default App;
