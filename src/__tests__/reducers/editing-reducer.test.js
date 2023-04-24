import editingReducer from "../../reducers/editing-reducer";

describe("editingReducer", () => {

  test("Returns default state if no action type is recognized", () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test("Toggles editing state to true", () => {
    expect(editingReducer(false, { type: "TOGGLE_EDIT_FORM"})).toEqual(true);
  });

});