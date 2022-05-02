import axios from 'axios';
import React from 'react';

const InventoryProduct = ({inventory,handleDeleteItem}) => {
    const {_id,name} = inventory;
    return (
        <div >
            <h3>{name}</h3>
            <button onClick={()=>handleDeleteItem(_id)}>Delete Item</button>
        </div>
    );
};

export default InventoryProduct;