import React from 'react';

const User = (props) => {
    const {login,html_url,avatar_url} = props.user

    return (
      <div className="card text-center m-2 p-2 align-items-center">
        <img src={avatar_url} alt={login} style={imgStyle} />
        <h6>{login}</h6>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
}
const imgStyle = {
  width: "60px",
  borderRadius: "2em",
};

 
export default User;
