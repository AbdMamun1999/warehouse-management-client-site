import React from 'react';

const Inventory = (props) => {
    const {price,name,quantity} = props.inventory
    return (
        <div className=' border'>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button>Update</button>
        </div>
    );
};

export default Inventory;