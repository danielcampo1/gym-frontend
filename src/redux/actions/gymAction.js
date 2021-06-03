export const getPlan = () => {
    return (dispatch) => {
            fetch("http://localhost:3000/plans")
            .then(res => res.json())
            .then(data => dispatch({type: "FETCH_PLAN_SUCCESS", payload: data }))
    }
} 

export const createPlan = (newPlanData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/plans", {
        method: "POST",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ plan: newPlanData }),
        })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "CREATE_PLAN_SUCCESS", payload: data }))
    }
}   


export const createWorkout = (workout, planId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/plans/${planId}/workouts`,{
        method: "POST",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({workout}),
    })
    .then((res) => res.json())
    .then((workouts) => dispatch({ type: "CREATE_WORKOUT_SUCCESS", payload: workouts }))
    }
}