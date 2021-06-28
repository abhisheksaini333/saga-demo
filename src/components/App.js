import React from 'react';
import Loading from '../containers/Loading';
import Button from '../containers/Button';
import ProductItem from '../containers/ProductItem';

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Button/>
            <Loading/>
            <ProductItem/>
        </div>
    )
}

export default App