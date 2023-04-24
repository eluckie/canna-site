import rootReducer from "../../reducers/index";
import { legacy_createStore as createStore } from "redux";
import newCannaVisibleReducer from "../../reducers/new-canna-visible-reducer";
import inStockListReducer from "../../reducers/in-stock-list-reducer";
import editingReducer from "../../reducers/editing-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Returns default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      inStockList: {},
      newCannaVisible: false,
      editing: false
    });
  });

  test("Initial state of inStockListReducer matches rootReducer", () => {
    expect(store.getState().inStockList).toEqual(inStockListReducer(undefined, { type: null }));
  });

  test("Initial state of newCannaVisibleReducer matches rootReducer", () => {
    expect(store.getState().newCannaVisible).toEqual(newCannaVisibleReducer(undefined, { type: null }));
  });

  test("ADD_OR_EDIT_CANNA action works for inStockListReducer and rootReducer", () => {
    const action = {
      type: "ADD_OR_EDIT_CANNA",
      name: "Durban",
      cat: "sativa",
      effects: "makes you so smart",
      price: 22,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().inStockList).toEqual(inStockListReducer(undefined, action));
  });

  test("TOGGLE_NEW_FORM action works for newCannaVisibleReducer and rootReducer", () => {
    const action = {
      type: "TOGGLE_NEW_FORM"
    }
    store.dispatch(action);
    expect(store.getState().newCannaVisible).toEqual(newCannaVisibleReducer(undefined, action));
  });

  test("Initial state of editingReducer matches rootReducer", () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, { type: null }));
  });

  test("TOGGLE_EDIT_FORM action works for editingReducer and rootReducer", () => {
    const action = {
      type: "TOGGLE_EDIT_FORM"
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });
});