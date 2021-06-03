export default (state = [], action) => {
  // debugger;
  switch (action.type) {
    case "FETCH_PLAN_SUCCESS":
      return action.payload;
        case "CREATE_PLAN_SUCCESS":
         return [...state, action.payload]
         case "CREATE_WORKOUT_SUCCESS":
           return[...state, state.map(plan => {
             console.log(plan)
             if (plan.id === action.payload.id) {
               return action.payload 
             } else {
               return plan
             }
           })]
      default:
        return state;
    }
  };