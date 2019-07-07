import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <ul className="header">
      <li>Hugo TH</li>
      <div className="header-right">
        <li>Discover</li>
        <li>My Profile</li>
        <li>Login</li>
      </div>
    </ul>
  );
};

export default Header;
