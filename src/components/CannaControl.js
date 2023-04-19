import React from "react";
import NavBar from "./NavBar";
// import InStock from "./InStock";
// import NewCannaForm from "./NewCannaForm";
// import AboutUs from "./AboutUs";
// import VisitUs from "./VisitUs";

// class CannaControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       aboutUsVisible: false,
//       visitUsVisible: false
//     };
//   }

//   render() {
//     let currentlyVisibleState = null;

//     if (this.state.aboutUsVisible) {
//       currentlyVisibleState = <AboutUs />
//     } else if (this.state.visitUsVisible) {
//       currentlyVisibleState = <VisitUs />
//     } else if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewCannaForm />
//     } else {
//       currentlyVisibleState = <InStock/>
//     }

//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//       </React.Fragment>
//     );
//   }
// }

function CannaControl() {
  return (
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
  );
}

export default CannaControl;