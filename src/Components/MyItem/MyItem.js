import React from 'react';

const MyItem = ({ myItem, handleMyItemDelete }) => {
    const { name, img, quantity, suplier, price } = myItem
    return (
        <tr>
            <td>
                <img src={img} alt="" />
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <button className='delete-button'  onClick={handleMyItemDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default MyItem;