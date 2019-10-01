import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.id})
        })
        .catch( err=> {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: res.data.id})
        });
};