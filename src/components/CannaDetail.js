import React from "react";
import PropTypes from "prop-types";

function CannaDetail(props) {
  const { canna } = props;

  return (
    <React.Fragment>
      <h2>{canna.name}</h2>
      <h4>{canna.type} - ${canna.price} per 3.5g</h4>
      <h4>Effects:</h4>
      <p>{canna.effects}</p>
      <h4>{props.quantity} in stock</h4>
      <br/>
      <button>add to cart</button>
      <span id="padding"></span>
      <button>restock</button>
      <br/><br/>
      <button>edit canna</button>
      <span id="padding"></span>
      <button>delete canna</button>
    </React.Fragment>
  );
}

CannaDetail.propTypes = {
  canna: PropTypes.object
};

export default CannaDetail;