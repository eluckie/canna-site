import React from "react";
import InStock from "./InStock";
import NewCannaForm from "./NewCannaForm";
import AboutUs from "./AboutUs";
import VisitUs from "./VisitUs";
import CannaDetail from "./CannaDetail";
import EditCannaForm from "./EditCannaForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      selectedCanna: null,
      editing: false
    };
  }

  handleAboutUsClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: true,
      inStocksVisible: false,
      selectedCanna: null,
      editing: false
    });
  }

  handleVisitUsClick = () => {
    this.setState({
      visitUsVisible: true,
      aboutUsVisible: false,
      inStocksVisible: false,
      selectedCanna: null,
      editing: false
    })
  }

  handleInStockClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: true,
      selectedCanna: null,
      editing: false
    });
  }

  handleStaffPicksClick = () => {
    this.setState({
      visitUsVisible: false,
      aboutUsVisible: false,
      inStocksVisible: false,
      selectedCanna: null,
      editing: false
    });
  }

  handleNewCannaClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_FORM"
    }
    dispatch(action);
  }

  handleAddingNewCanna = (newCanna) => {
    const { dispatch } = this.props;
    const { name, cat, effects, price, id } = newCanna;
    const action = {
      type: "ADD_OR_EDIT_CANNA",
      name: name,
      cat: cat,
      effects: effects,
      price: price,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM"
    }
    dispatch(action2);
  }

  handleChangingSelectedCanna = (id) => {
    const selectedCanna = this.props.inStockList[id];
    this.setState({selectedCanna: selectedCanna});
  }

  handleDeletingCanna = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_CANNA",
      id: id
    }
    dispatch(action);
    this.setState({selectedCanna: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCanna = (cannaToEdit) => {
    const { dispatch } = this.props;
    const { name, cat, effects, price, id } = cannaToEdit;
    const action = {
      type: "ADD_OR_EDIT_CANNA",
      name: name,
      cat: cat,
      effects: effects,
      price: price,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedCanna: null
    });
  }

  // handleRestockingCanna = (cannaToStock) => {
  //   const editedInStockList = this.state.inStockList
  //     .filter(canna => canna.id !== this.state.selectedCanna.id)
  //     .concat(cannaToStock);
  //   this.setState({
  //     inStockList: editedInStockList,
  //     selectedCanna: null
  //   });
  // }

  // handleBuyingCanna = (cannaToBuy) => {
  //   const editedInStockList = this.state.inStockList
  //     .filter(canna => canna.id !== this.state.selectedCanna.id)
  //     .concat(cannaToBuy);
  //   this.setState({
  //     inStockList: editedInStockList,
  //     selectedCanna: null
  //   });
  // }

  render() {
    let currentlyVisibleState = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCannaForm
        canna = {this.state.selectedCanna}
        onEditCanna = {this.handleEditingCanna} />
    } else if (this.state.selectedCanna != null) {
      currentlyVisibleState = <CannaDetail
        canna={this.state.selectedCanna}
        onClickingDelete = {this.handleDeletingCanna}
        onClickingEdit = {this.handleEditClick}
        // onClickingRestock = {this.handleRestockClick}
        // onClickingBuy={this.handleBuyClick}
        />
    } else if (this.state.aboutUsVisible) {
      currentlyVisibleState = <AboutUs />
    } else if (this.state.visitUsVisible) {
      currentlyVisibleState = <VisitUs />
    } else if (this.props.newCannaVisible) {
      currentlyVisibleState = <NewCannaForm 
        onNewCannaCreation={this.handleAddingNewCanna}/>
    } else {
      currentlyVisibleState = <InStock 
        cannaList={this.props.inStockList}
        onCannaSelection={this.handleChangingSelectedCanna}/>
    } 

    return (
      <React.Fragment>
        <br/>
        <div id="center">
          <button id="nav-btns" onClick={this.handleAboutUsClick}>About Us</button>
          <button id="nav-btns" onClick={this.handleVisitUsClick}>Visit Us</button>
          <button id="nav-btns" onClick={this.handleInStockClick}>Available</button>
          <button id="nav-btns" onClick={this.handleNewCannaClick}>Add New Canna</button>
        </div>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  inStockList: PropTypes.object,
  newCannaVisible: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    inStockList: state.inStockList,
    newCannaVisible: state.newCannaVisible
  }
}

NavBar = connect(mapStateToProps)(NavBar);

export default NavBar;