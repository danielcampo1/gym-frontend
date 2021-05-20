export const getWorkout = () => {
    return (dispatch) => {
            fetch("http://localhost:3000/workouts")
            .then(res => res.json())
            .then(data => dispatch({type: "FETCH_GYM_SUCCESS", payload: data }))
    }
} 

export const createWorkout = (newWorkoutData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/workouts", {
        method: "POST",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ gymWorkout: newWorkoutData }),
        })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "CREATE_WORKOUT_SUCCESS", payload: data }))
    }
}   