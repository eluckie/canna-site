import React from "react";
import PropTypes from "prop-types";

function CannaDetail(props) {
  const { canna, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div id="padding">
        <h2>{canna.name}</h2>
        <h4>{canna.type} - ${canna.price} per 3.5g</h4>
        <h4>Effects:</h4>
        <p>{canna.effects}</p>
        <h4>{canna.quantity} in stock</h4>
        <br/>
        <button>add to cart</button>
        <span id="padding"></span>
        <button>restock</button>
        <br/><br/>
        <button onClick={props.onClickingEdit}>edit canna</button>
        <span id="padding"></span>
        <button onClick={() => onClickingDelete(canna.id)}>delete canna</button>
      </div>
    </React.Fragment>
  );
}

CannaDetail.propTypes = {
  canna: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CannaDetail;