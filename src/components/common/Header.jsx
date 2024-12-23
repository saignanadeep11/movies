import React, { useEffect } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mainHeaderDiv">
        <div className="titleName">MovieDb</div>
        <div className="headerSection">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <p>Popular</p>
          </div>
          <div
            onClick={() => {
              navigate("/TopRated");
            }}
          >
            <p>Top Rated</p>
          </div>
          <div
            onClick={() => {
              navigate("/Upcoming");
            }}
          >
            <p>Upcoming</p>
          </div>
          <div>
            <input placeholder="Movie Name"></input>
          </div>
          <div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
