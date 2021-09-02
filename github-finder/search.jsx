import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUser(text);
    setText("");
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={inputStyle}
        />
        <input type="submit" value="Search" className="btn btn-dark" style={{ width: "100%" }} />
      </form>
      {props.showUser && (
        <button onClick={props.clearUsers} className="btn btn-light" style={{ width: "100%" }}>
          Clear
        </button>
      )}
    </React.Fragment>
  );
};
const inputStyle = {
  width: "100%",
  padding: "0.5em",
  margin: "0.3em",
};

export default Search;
