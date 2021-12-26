import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "./context/ThemeProvider";
import { useContext } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, dispatch } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  console.log(darkMode);
  const handleToggle = () => {
    dispatch({
      type: "LIGHTMODE",
    });
    setIsDarkMode();
  };
  return (
    <div style={nav}>
      <a>Github Finder</a>
      <div onClick={handleToggle} style={toggleBtn}>
        {darkMode ? <BsLightbulbFill /> : <MdDarkMode />}
      </div>
    </div>
  );
};

const toggleBtn = {
  fontSize: "20px",
  cursor: "pointer",
};
const nav = {
  // width: "100%",
  background: "#a83535",
  padding: "1em ",
  color: "white",
  fontSize: "bold",
  display: "flex",
  justifyContent: "space-between",
};

export default Navbar;
