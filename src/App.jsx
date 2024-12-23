import { useState } from "react";

import "./App.css";
import Home from "./components/pages/Home";
import TopRated from "./components/pages/TopRated";
import Upcoming from "./components/pages/Upcoming";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
