import React from 'react';
import PropTypes from 'prop-types'


const Navbar = () => {
    return ( 
        <div style={nav}>
            <a>Github Finder</a>
        </div>
     );
}
const nav = {
  width: "100%",
  background: "#a83535",
  padding: "1em ",
  color: "white",
  fontSize: "bold",
};


 
export default Navbar;