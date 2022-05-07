import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = (props) => {
    const {price,name,quantity,_id,img,description,supplier} = props.inventory
    const navigate = useNavigate()

    const handleNavigatePage = id =>{
        navigate(`/inventory/${id}`)
    }

    const backgroundImgInventory ={
        backgroundImage:`url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'
    }

    return (
        <div className='background-img' style={backgroundImgInventory}>
            {/* <img src={img} alt="" /> */}
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>{description.slice(0,90)}...</p>
            <p>Supplier's Name: {supplier}</p>
            <button onClick={()=>handleNavigatePage(_id)}>Update</button>
        </div>
    );
};

export default Inventory;