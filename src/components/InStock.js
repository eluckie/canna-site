import React from "react";
import Canna from "./Canna";
import PropTypes from "prop-types";

function InStock(props) {
  return (
    <React.Fragment>
      <div id="padding">
        {props.cannaList.map((canna) =>
          <div id="canna-list">
            <Canna
              whenCannaClicked={props.onCannaSelection}
              name={canna.name}
              type={canna.type}
              effects={canna.effects}
              price={canna.price}
              quantity={canna.quantity}
              id={canna.id}
              key={canna.id}/>
            </div>
          )}
        <hr/>
      </div>
    </React.Fragment>
  );
}

InStock.propTypes = {
  cannaList: PropTypes.array,
  onCannaSelection: PropTypes.func
};

export default InStock;