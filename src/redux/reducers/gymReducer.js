export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLAN_SUCCESS":
      return action.payload;
        case "CREATE_PLAN_SUCCESS":
         return [...state, action.payload]
         case "CREATE_WORKOUT_SUCCESS":
           return[...state, state.map(plan => {
             if (plan.id === action.payload.id) {
               return action.payload
             }else {
               return state
             }
           })]
      default:
        return state;
    }
  };