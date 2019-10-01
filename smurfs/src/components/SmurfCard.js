import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import "semantic-ui-css/semantic.min.css";
import { Card } from 'semantic-ui-react';

const SmurfCard = (({ fetchSmurf, smurfs }) => {

    useEffect(() => {
        fetchSmurf();
    }, [fetchSmurf])


    return (
        <div className='smurf-list'>
            {smurfs.map(smurf => {
                return (
                <Card key={smurf.id} className='smurf-card'>
                    <Card.Description>{smurf.name}</Card.Description>
                    <Card.Description>{smurf.age} years old</Card.Description>
                    <Card.Description>{smurf.height}cm</Card.Description>
                </Card>
                )
            })}
        </div>
    );
});


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf }
)(SmurfCard);