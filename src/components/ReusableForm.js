import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Strain Name"/>
        <span id="padding"></span>
        <input
          type="text"
          name="cat"
          placeholder="Sativa/Hybrid/Indica"/>
        <br/><br/>
        <textarea
          type="text"
          name="effects"
          cols="50"
          rows="6"
          placeholder="How does it make you feel?"/>
        <br/><br/>
        <input
          type="number"
          name="price"
          placeholder="Price per 3.5g"/>
        <br/><br/>
        <button id="form-btn" type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;