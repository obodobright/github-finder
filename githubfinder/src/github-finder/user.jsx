import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import "./theme.css";
const User = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const { login, html_url, avatar_url } = props.user;

  return (
    <div className={darkMode ? "card-dark" : "card-light"} style={card}>
      <img src={avatar_url} alt={login} style={imgStyle} />
      <h4>{login}</h4>
      <div>
        <a href={html_url} style={btn} className={darkMode ? "btn-dark" : "btn-light"}>
          More
        </a>
      </div>
    </div>
  );
};

const btn = {
  width: "100px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "#A83535",
  borderRadius: "3px",
  textDecoration: "none",
  // color: "white",
};

const card = {
  width: "200px",
  minHeight: "20vh",
  height: "100%",
  // background: "whitesmoke",
  margin: "20px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderRadius: "4px",
};
const imgStyle = {
  width: "60px",
  borderRadius: "2em",
};

export default User;
