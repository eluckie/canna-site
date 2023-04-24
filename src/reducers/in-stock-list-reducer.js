const reducer = (state = {}, action) => {
  const { name, cat, effects, price, id } = action;
  switch(action.type) {
    case "ADD_OR_EDIT_CANNA":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          cat: cat,
          effects: effects,
          price: price,
          id: id
        }
      });
    case "DELETE_CANNA":
      let newState = {...state};
      delete newState[id];
      return newState;

  default:
    return state;
  }
};

export default reducer;