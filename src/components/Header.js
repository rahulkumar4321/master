import React from "react";
import "./App.css";
import logo from "./pnblogo.png"
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="title">Header</h1>
      <h2>my name is Rahul Kumar</h2>
      <h2>java developer</h2>
    </header>
  );
}

export default Header;
