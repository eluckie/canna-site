import React from "react";
import PropTypes from "prop-types";

function BuyCannaForm(props) {
  const { canna } = props;

  function handleBuyCannaFormSubmission(event) {
    event.preventDefault();
    props.onBuyCanna({
      name: canna.name,
      cat: canna.cat,
      effects: canna.effects,
      price: parseInt(canna.price),
      quantity: parseInt(canna.quantity - parseInt(event.target.quantity.value)),
      id: canna.id
    });
  }

  return (
    <React.Fragment>
      <div id="visit-us">
        <h3><span id="accent">how many eighths would you like?</span></h3>
        <form onSubmit={handleBuyCannaFormSubmission}>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"/>
          <br/><br/>
          <button id="form-btn" type="submit">let's roll</button>
        </form>
      </div>
    </React.Fragment>
  );
}

BuyCannaForm.propTypes = {
  canna: PropTypes.object,
  onRestockCanna: PropTypes.func
};

export default BuyCannaForm;