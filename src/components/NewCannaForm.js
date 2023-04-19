import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewCannaForm(props) {
  
  function handleNewCannaFormSubmission(event) {
    event.preventDefault();
    props.onNewCannaCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      effects: event.target.effects.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div id="visit-us">
      <ReusableForm
        formSubmissionHandler={handleNewCannaFormSubmission}
        buttonText="let them grow" />
        </div>
    </React.Fragment>
  );
}

NewCannaForm.propTypes = {
  onNewCannaCreation: PropTypes.func
};

export default NewCannaForm;