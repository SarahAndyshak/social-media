import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <React.Fragment>
      <Navigation/>
      <SearchBar/>
    </React.Fragment>
  );
}

export default Header;