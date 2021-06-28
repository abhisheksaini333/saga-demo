import React from 'react';

import { connect } from 'react-redux';

let ProductItem = ({ todos }) => {
    return (
        todos 
            ? 
            todos.map((item, index) => {
                return (
                    <div key={index}>
                        { item.title } - isComplete: { item.completed }
                    </div>
                )
            })
            :
            null
    )
}

const mapStateToProps = (state) => ({
    todos: state.product
})
ProductItem = connect(mapStateToProps, null) (ProductItem);
export default ProductItem