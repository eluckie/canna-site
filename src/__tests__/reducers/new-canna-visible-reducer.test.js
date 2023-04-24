import newCannaVisibleReducer from "../../reducers/new-canna-visible-reducer";

describe("newCannaVisibleReducer", () => {
  test("Returns default state if no action type is recognized", () => {
    expect(newCannaVisibleReducer(false, { type: null })).toEqual(false);
  });

  test("Toggles form visibility state to true", () => {
    expect(newCannaVisibleReducer(false, { type: "TOGGLE_FORM" })).toEqual(true);
  });

  
});