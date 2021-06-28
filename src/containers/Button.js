import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions';

let Button = ({ getTodos }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <center>
                <button onClick={getTodos}>Get Todos</button>
            </center>
        </div>
    )
}

const mapDispatchToProps = {
    getTodos: getTodos
}
Button = connect(null, mapDispatchToProps) (Button);
export default Button;