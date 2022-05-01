import React from 'react';

const InventoryProduct = (props) => {
    const {name} = props.inventory
    return (
        <div >
            <h3>{name}</h3>
            <button>Delete Item</button>
        </div>
    );
};

export default InventoryProduct;