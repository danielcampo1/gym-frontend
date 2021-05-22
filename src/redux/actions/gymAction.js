export const getPlan = () => {
    return (dispatch) => {
            fetch(`http://localhost:3000/plans`)
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
        body: JSON.stringify({ Plan: newPlanData }),
        })
    // .then((res) => res.json())
    .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
    .then((data) => dispatch({ type: "CREATE_PLAN_SUCCESS", payload: data }))
    }
}   