import React from 'react';
import './InventoryProduct.css'

const InventoryProduct = ({ inventory, handleDeleteItem }) => {
    const { _id, name, img, price, quantity } = inventory;
    return (


        <tr>
            <td>
                <img src={img} alt="" />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className='delete-button' onClick={() => handleDeleteItem(_id)}>Delete</button>
            </td>
        </tr>


    );
};

export default InventoryProduct;


{/* <h3>{name}</h3>
             */}