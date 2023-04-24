import inStockListReducer from "../../reducers/in-stock-list-reducer";

describe("inStockListReducer", () => {

  let action;

  const currentState = {
    1: {
      name: "Cookies",
      cat: "hybrid",
      effects: "happy and friendly",
      price: 33,
      id: 1
    },
    2: {
      name: "Wedding Cake",
      cat: "indica",
      effects: "lazy, hungry, and so happy",
      price: 44,
      id: 2
    }
  }

  const cannaData = {
    name: "Durban",
    cat: "sativa",
    effects: "makes you so smart",
    price: 22,
    id: 1
  };

  test("Returns default state if there is no action type passed into the reducer", () => {
    expect(inStockListReducer({}, { type: null })).toEqual({});
  });

  test("Correctly add new canna data to inStockList", () => {
    const { name, cat, effects, price, id } = cannaData;
    action = {
      type: "ADD_OR_EDIT_CANNA",
      name: name,
      cat: cat,
      effects: effects,
      price: price,
      id: id
    };
    expect(inStockListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        cat: cat,
        effects: effects,
        price: price,
        id: id
      }
    });
  });

  test("Successfully delete a canna", () => {
    action = {
      type: "DELETE_CANNA",
      id: 1
    };
    expect(inStockListReducer(currentState, action)).toEqual({
      2: {
        name: "Wedding Cake",
        cat: "indica",
        effects: "lazy, hungry, and so happy",
        price: 44,
        id: 2
      }
    });
  });

});