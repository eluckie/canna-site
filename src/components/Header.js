import React from "react";
import CannaPhoto from "./../img/canna.png";

function Header() {
  return (
    <React.Fragment>
      <div id="center">
        <img src={CannaPhoto} alt="cannabis icon"/>
        <hr/>
      </div>
    </React.Fragment>
  );
}

export default Header;