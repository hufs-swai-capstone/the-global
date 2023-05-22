import React from "react";
import {Routes, Route} from "react-router-dom"
// components
import Header from "./components/Header";

// pages
import Main from "./pages/Main"
import SearchPage from "./pages/SearchPage";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      
    </>
  );
}

export default App;
