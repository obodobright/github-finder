import React, { useState, useEffect } from "react";
import User from "./user";
import Search from "./search";
const UserItem = () => {
  const [users, setUsers] = useState([]);
  const [loading, SetLoading] = useState(false);

  // const url = "https://api.github.com/users";

  // const updateUsers = async () => {
  //   const response = await fetch(url);
  //   const user = await response.json();
  //   setUsers(user);
  //   SetLoading(false)
  // };
  // useEffect(() => {
  //   updateUsers();
  // },[]);

  // if(loading){
  //     return <h1 className="text-center m-2 text-danger">Loading...</h1>
  // }

  const searchUsers = async (text) => {
    SetLoading(true);
    const urlSearch = `https://api.github.com/search/users?q=${text}`;
    const response = await fetch(urlSearch);
    const user = await response.json();
    console.log(user.items);
    SetLoading(false);
    setUsers(user.items);
  };

  const clearUsers = () => {
    setUsers([]);
    SetLoading(false);
  };

  return (
    <React.Fragment>
      <div className="container">
        <Search
          searchUser={searchUsers}
          clearUsers={clearUsers}
          showUser={users.length > 0 ? true : false}
        />

        {loading === true && <h1 className="text-center m-2 text-danger">Loading...</h1>}
        <div style={styleList}>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const styleList = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default UserItem;
