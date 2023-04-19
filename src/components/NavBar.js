import React from "react";
import InStock from "./InStock";
import NewCannaForm from "./NewCannaForm";
import AboutUs from "./AboutUs";
import VisitUs from "./VisitUs";
import StaffPicks from "./StaffPicks";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      newCannaVisible: false,
      staffPicksVisible: false
    };
  }

  handleAboutUsClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: true,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false
    });
  }

  handleVisitUsClick = () => {
    this.setState({
      visitUsVisible: true,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false
    })
  }

  handleInStockClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      newCannaVisible: false,
      staffPicksVisible: false
    });
  }

  handleStaffPicksClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: true
    });
  }

  handleNewCannaClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: true,
      staffPicksVisible: false
    });
  }

  render() {
    let currentlyVisibleState = null;

    if (this.state.aboutUsVisible) {
      currentlyVisibleState = <AboutUs />
    } else if (this.state.visitUsVisible) {
      currentlyVisibleState = <VisitUs />
    } else if (this.state.newCannaVisible) {
      currentlyVisibleState = <NewCannaForm />
    } else if (this.state.staffPicksVisible) {
      currentlyVisibleState = <StaffPicks/>
    } else if (this.state.newCannaVisible) {
      currentlyVisibleState = <NewCannaForm/>
    } else {
      currentlyVisibleState = <InStock/>
    }

    return (
      <React.Fragment>
        <br/>
        <div id="center">
          <button id="padding" onClick={this.handleAboutUsClick}>About Us</button>
          <button id="padding" onClick={this.handleVisitUsClick}>Visit Us</button>
          <button id="padding" onClick={this.handleInStockClick}>Available</button>
          <button id="padding" onClick={this.handleStaffPicksClick}>Staff Picks</button>
          <button id="padding" onClick={this.handleNewCannaClick}>Add New Canna</button>
        </div>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default NavBar;