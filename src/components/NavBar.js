import React from "react";
import InStock from "./InStock";
import NewCannaForm from "./NewCannaForm";
import AboutUs from "./AboutUs";
import VisitUs from "./VisitUs";
import StaffPicks from "./StaffPicks";
import CannaDetail from "./CannaDetail";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      newCannaVisible: false,
      staffPicksVisible: false,
      inStockList: [],
      selectedCanna: null
    };
  }

  handleAboutUsClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: true,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null
    });
  }

  handleVisitUsClick = () => {
    this.setState({
      visitUsVisible: true,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null
    })
  }

  handleInStockClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null
    });
  }

  handleStaffPicksClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: true,
      selectedCanna: null
    });
  }

  handleNewCannaClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: true,
      staffPicksVisible: false,
      selectedCanna: null
    });
  }

  handleAddingNewCanna = (newCanna) => {
    const newInStockList = this.state.inStockList.concat(newCanna);
    this.setState({
      inStockList: newInStockList,
      newCannaVisible: false
    });
  }

  handleChangingSelectedCanna = (id) => {
    const selectedCanna = this.state.inStockList.filter(canna => canna.id === id)[0];
    this.setState({selectedCanna: selectedCanna});
  }

  render() {
    let currentlyVisibleState = null;

    if (this.state.selectedCanna != null) {
      currentlyVisibleState = <CannaDetail
        canna={this.state.selectedCanna}/>
    } else if (this.state.aboutUsVisible) {
      currentlyVisibleState = <AboutUs />
    } else if (this.state.visitUsVisible) {
      currentlyVisibleState = <VisitUs />
    } else if (this.state.newCannaVisible) {
      currentlyVisibleState = <NewCannaForm 
        onNewCannaCreation={this.handleAddingNewCanna}/>
    } else if (this.state.staffPicksVisible) {
      currentlyVisibleState = <StaffPicks/>
    } else if (this.state.newCannaVisible) {
      currentlyVisibleState = <NewCannaForm/>
    } else {
      currentlyVisibleState = <InStock 
        cannaList={this.state.inStockList}
        onCannaSelection={this.handleChangingSelectedCanna}/>
    } 

    return (
      <React.Fragment>
        <br/>
        <div id="center">
          <button id="nav-btns" onClick={this.handleAboutUsClick}>About Us</button>
          <button id="nav-btns" onClick={this.handleVisitUsClick}>Visit Us</button>
          <button id="nav-btns" onClick={this.handleInStockClick}>Available</button>
          <button id="nav-btns" onClick={this.handleStaffPicksClick}>Staff Picks</button>
          <button id="nav-btns" onClick={this.handleNewCannaClick}>Add New Canna</button>
        </div>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default NavBar;