import React, {useState} from "react";
//TODO: Add state for dark mode

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className={darkMode ? null : "light"}>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
