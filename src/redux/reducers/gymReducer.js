export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLAN_SUCCESS":
      return action.payload;
        case "CREATE_PLAN_SUCCESS":
         return [...state, action.payload]
      default:
        return state;
    }
  };