export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_GYM_SUCCESS":
        return action.payload;
      default:
        return state;
    }
  };