import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './QuantityUpdate.css'

const QunatityUpdate = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    const navigate = useNavigate()
    const { name, img, description, price, quantity } = inventory

    useEffect(() => {
        axios.get(`https://ancient-fjord-07745.herokuapp.com/inventory/${inventoryId}`)
            .then(response => {
                const { data } = response;
                setInventory(data)
            })
    }, [inventory])

    const quantityUpdate = async event => {
        event.preventDefault()
        const quantity = parseInt(event.target.quantity.value);
        const previousQuantity = inventory.quantity
        if (quantity > 0) {
            const currentQuantity = quantity + previousQuantity;
            const url = `https://ancient-fjord-07745.herokuapp.com/inventory/${inventoryId}`

            const { data } = await axios.put(url, { currentQuantity })
            event.target.reset()
        }

    }


    const deliveriedQuantity = async event => {
        event.preventDefault()
        const previousQuantity = inventory.quantity
        const currentQuantity = previousQuantity - 1;
        const url = `https://ancient-fjord-07745.herokuapp.com/inventory/${inventoryId}`

        const { data } = await axios.put(url, { currentQuantity })

    }

    return (
        <div>
            <h2 className='text-center header'>Quantity Update page</h2>
            <div className='quantity-update-container'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 color='header'>{name}</h2>
                    <p className='product-description'>{description}</p>
                    <form onSubmit={quantityUpdate}>
                        <div className='d-flex'>
                            <label htmlFor="quantity">Quantity: {quantity}kg</label><br /><br />
                            <label htmlFor="quantity">Price: ${price} per kg</label><br /><br />
                        </div>
                        <input className='input-quantity' type="text" placeholder='Quantity' name='quantity' /> <br /><br />
                        <div className='quantity-button-div'>
                            <input type="submit" value="Quantity Update" />
                            <button className='deliveried-button' onClick={deliveriedQuantity}>Deliveried</button>
                        </div>
                    </form>


                </div>

            </div>
            <div className='manage-inventory-button'>
                <button  onClick={() => navigate('/manageInventory')}>Manage Inventory</button>
            </div>
        </div>
    );
};

export default QunatityUpdate;