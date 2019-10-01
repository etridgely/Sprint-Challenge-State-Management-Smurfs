import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

const SmurfVillage = ({ fetchSmurf, id, isFetching, error }) => {
    
};

const mapStateToProps = state => {
    return {
        id: state.id,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    { fetchSmurf }
) (SmurfVillage);