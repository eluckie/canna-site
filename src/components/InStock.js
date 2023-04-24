import React from "react";
import Canna from "./Canna";
import PropTypes from "prop-types";

function InStock(props) {
  return (
    <React.Fragment>
      <div id="padding">
        {Object.values(props.cannaList).map((canna) =>
          <div id="canna-list" key={canna.id}>
            <Canna
              whenCannaClicked={props.onCannaSelection}
              name={canna.name}
              cat={canna.cat}
              effects={canna.effects}
              price={canna.price}
              // quantity={canna.quantity}
              id={canna.id}/>
            </div>
          )}
        <hr/>
      </div>
    </React.Fragment>
  );
}

InStock.propTypes = {
  cannaList: PropTypes.object,
  onCannaSelection: PropTypes.func
};

export default InStock;