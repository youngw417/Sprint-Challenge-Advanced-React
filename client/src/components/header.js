import React from "react";
import {useDarkMode}  from './useDarkMode';


function Header() {
  const [darkMode, setDarkMode] = useDarkMode('mode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };



  return (
    <div className="main-nav">
      <h1>
     
        <i className="fas fa-futbol"></i> Top Players in Women's Worldcup
      </h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
     </div>
  );
}

export default Header;