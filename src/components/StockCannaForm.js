import React from "react";
import PropTypes from "prop-types";

function StockCannaForm(props) {
  const { canna } = props;

  function handleStockCannaFormSubmission(event) {
    event.preventDefault();
    props.onRestockCanna({
      name: canna.name,
      type: canna.type,
      effects: canna.effects,
      price: parseInt(canna.price),
      quantity: parseInt(parseInt(event.target.quantity.value) + canna.quantity),
      id: canna.id
    });
  }

  return (
    <React.Fragment>
      <div id="visit-us">
        <h3><span id="accent">restock</span></h3>
        <form onSubmit={handleStockCannaFormSubmission}>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"/>
          <br/><br/>
          <button id="form-btn" type="submit">pack it</button>
        </form>
      </div>
    </React.Fragment>
  );
}

StockCannaForm.propTypes = {
  canna: PropTypes.object,
  onRestockCanna: PropTypes.func
};

export default StockCannaForm;