import React from "react";
import CannaPhoto from "./../img/canna.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <React.Fragment>
      <div id="header-icon">
        <img src={CannaPhoto} alt="cannabis icon"/>
        <h1>pot luck canna</h1>
        <hr/>
        <NavBar/>
        <hr/>
      </div>
    </React.Fragment>
  );
}

export default Header;