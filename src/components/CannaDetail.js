import React from "react";
import PropTypes from "prop-types";

function CannaDetail(props) {
  const { canna, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div id="visit-us">
        <h2 id="accent">{canna.name}</h2>
        <p><em>{canna.type}</em></p>
        <p><em><span id="mini">${canna.price} per 3.5g</span></em></p>
        <div id="canna-list">
          <h4>Effects:</h4>
          <p>{canna.effects}</p>
        </div>
        <h4>{canna.quantity} in stock</h4>
        <br/>
        <button id="form-btn">buy</button>
        <span id="padding"></span>
        <button onClick={props.onClickingRestock} id="white-form-btn">restock</button>
        <br/><br/>
        <hr/>
        <br/>
        <button onClick={props.onClickingEdit} id="white-form-btn">edit {canna.name}</button>
        <span id="padding"></span>
        <button onClick={() => onClickingDelete(canna.id)} id="white-form-btn">delete {canna.name}</button>
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