import React from "react";
import InStock from "./InStock";
import NewCannaForm from "./NewCannaForm";
import AboutUs from "./AboutUs";
import VisitUs from "./VisitUs";
import StaffPicks from "./StaffPicks";
import CannaDetail from "./CannaDetail";
import EditCannaForm from "./EditCannaForm";
import StockCannaForm from "./StockCannaForm";
import BuyCannaForm from "./BuyCannaForm";

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
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
    };
  }

  handleAboutUsClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: true,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
    });
  }

  handleVisitUsClick = () => {
    this.setState({
      visitUsVisible: true,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
    })
  }

  handleInStockClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      newCannaVisible: false,
      staffPicksVisible: false,
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
    });
  }

  handleStaffPicksClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: false,
      staffPicksVisible: true,
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
    });
  }

  handleNewCannaClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      newCannaVisible: true,
      staffPicksVisible: false,
      selectedCanna: null,
      editing: false,
      stocking: false,
      buying: false
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

  handleDeletingCanna = (id) => {
    const newInStockList = this.state.inStockList.filter(canna => canna.id !== id);
    this.setState({
      inStockList: newInStockList,
      selectedCanna: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCanna = (cannaToEdit) => {
    const editedInStockList = this.state.inStockList
      .filter(canna => canna.id !== this.state.selectedCanna.id)
      .concat(cannaToEdit);
    this.setState({
      inStockList: editedInStockList,
      editing: false,
      selectedCanna: null
    });
  }

  handleRestockClick = () => {
    this.setState({stocking: true});
  }

  handleRestockingCanna = (cannaToStock) => {
    const editedInStockList = this.state.inStockList
      .filter(canna => canna.id !== this.state.selectedCanna.id)
      .concat(cannaToStock);
    this.setState({
      inStockList: editedInStockList,
      stocking: false,
      selectedCanna: null
    });
  }

  handleBuyClick = () => {
    this.setState({buying: true});
  }

  handleBuyingCanna = (cannaToBuy) => {
    const editedInStockList = this.state.inStockList
      .filter(canna => canna.id !== this.state.selectedCanna.id)
      .concat(cannaToBuy);
    this.setState({
      inStockList: editedInStockList,
      buying: false,
      selectedCanna: null
    });
  }

  render() {
    let currentlyVisibleState = null;

    if (this.state.buying) {
      currentlyVisibleState = <BuyCannaForm
        canna={this.state.selectedCanna}
        onBuyCanna = {this.handleBuyingCanna} />
    } else if (this.state.stocking) {
      currentlyVisibleState = <StockCannaForm
        canna={this.state.selectedCanna}
        onRestockCanna = {this.handleRestockingCanna} />
    } else if (this.state.editing) {
      currentlyVisibleState = <EditCannaForm
        canna = {this.state.selectedCanna}
        onEditCanna = {this.handleEditingCanna} />
    } else if (this.state.selectedCanna != null) {
      currentlyVisibleState = <CannaDetail
        canna={this.state.selectedCanna}
        onClickingDelete = {this.handleDeletingCanna}
        onClickingEdit = {this.handleEditClick}
        onClickingRestock = {this.handleRestockClick}
        onClickingBuy={this.handleBuyClick}/>
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