export const getworkout = () => {
    return (dispatch) => {
            fetch("http://localhost:3000/workouts")
            .then(res => res.json())
            .then(data => dispatch({type: "FETCH_GYM_SUCCESS", payload: data }))
    }
} 