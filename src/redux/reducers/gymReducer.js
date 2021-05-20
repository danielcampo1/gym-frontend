export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_GYM_SUCCESS":
         return action.payload;
        case "CREATE_WORKOUT_SUCCESS":
         return [...state, action.payload]
      default:
        return state;
    }
  };