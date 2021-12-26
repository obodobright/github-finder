import React, { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import "./theme.css";
const Search = (props) => {
  const [text, setText] = useState("");
  const { darkMode } = useContext(ThemeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUser(text);
    setText("");
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} style={form}>
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={inputStyle}
        />
        <input
          type="submit"
          value="Search"
          style={searchBtn}
          className={darkMode ? "searchBtn-dark" : "searchBtn-light"}
        />
        {props.showUser && (
          <button
            onClick={props.clearUsers}
            style={clearBtn}
            className={darkMode ? "Btn-dark" : "Btn-light"}
          >
            Clear
          </button>
        )}
      </form>
    </React.Fragment>
  );
};

const clearBtn = {
  width: "100px",
  height: "30px",
  // background: "white",
  // color: "#a83535",
  outline: "none",
  borderRadius: "3px",
  marginLeft: "10px",
  border: "1px solid #a83535",
  cursor: "pointer",
};

const searchBtn = {
  width: "100px",
  height: "30px",
  // background: "#a83535",
  // color: "white",
  outline: "none",
  border: "0",
  borderRadius: "3px",
  cursor: "pointer",
};
const form = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
};
const inputStyle = {
  width: "70%",
  padding: "0.5em",
  margin: "10px ",
  display: "flex",
  justifyContent: "center",
};

export default Search;
