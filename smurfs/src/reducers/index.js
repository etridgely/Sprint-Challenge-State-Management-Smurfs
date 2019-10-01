import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from "../actions";

const initialState =  {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                smurfs: action.payload
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_SMURF:
            return {
                ...state,
                isAdding: true,
                error: ""
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isAdding: false,
                error: ""
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isAdding: false,
                error: action.payload
            }    
        default:
            return state;
    }
};

export default reducer;