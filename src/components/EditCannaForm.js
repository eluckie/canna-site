import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCannaForm(props) {
  const { canna } = props;

  function handleEditCannaFormSubmission(event) {
    event.preventDefault();
    props.onEditCanna({
      name: event.target.name.value,
      type: event.target.type.value,
      effects: event.target.effects.value,
      price: parseInt(event.target.price.value),
      id: canna.id
    });
  }

  return (
    <React.Fragment>
      <div id="visit-us">
        <ReusableForm
          formSubmissionHandler={handleEditCannaFormSubmission}
          buttonText="accept change"/>
        </div>
    </React.Fragment>
  );
}

EditCannaForm.propTypes = {
  canna: PropTypes.object,
  onEditCanna: PropTypes.func
};

export default EditCannaForm;