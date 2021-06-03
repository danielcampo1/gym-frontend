export default (state = [], action) => {
  
  switch (action.type) {
    case "FETCH_PLAN_SUCCESS":
      return action.payload;
        case "CREATE_PLAN_SUCCESS":
         return [...state, action.payload]
         case "CREATE_WORKOUT_SUCCESS":
           let workouts = state.map(plan => {
            if (plan.id === action.payload.plan_id) {
              return {...plan, workouts: plan.workouts.concat(action.payload)}
            } else {
              return plan
            }
          })
           return workouts
      default:
        return state;
    }
  };