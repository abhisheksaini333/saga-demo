import React from 'react';

import img from '../logo.svg';
import { connect } from 'react-redux';

let Loading = ({ loading }) => {
    return (
        loading 
            ? 
            <div style={{ textAlign: 'center' }}>
                <h1>Loading....</h1>
                <img src={img} alt="loader image" height="100" width="100"/>
            </div>
            :
            null
    )
}

const mapStateToProps = (state) => ({
    loading: state.loading
});
Loading = connect(mapStateToProps, null) (Loading)
export default Loading