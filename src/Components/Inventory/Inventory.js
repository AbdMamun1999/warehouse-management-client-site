import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const {price,name,quantity,_id} = props.inventory
    const navigate = useNavigate()

    const handleNavigatePage = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className=' border'>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button onClick={()=>handleNavigatePage(_id)}>Update</button>
        </div>
    );
};

export default Inventory;