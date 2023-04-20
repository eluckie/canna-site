import React from "react";
import PropTypes from "prop-types";

function Canna(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCannaClicked(props.id)}>
        <h2 id="accent">{props.name}</h2>
        <h4>{props.type} - ${props.price}/3.5g</h4>
      </div>
    </React.Fragment>
  );
}

Canna.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  effects: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCannaClicked: PropTypes.func
};

export default Canna;