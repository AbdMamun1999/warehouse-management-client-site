import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QunatityUpdate = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:5000/inventory/${inventoryId}`)
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
            console.log(currentQuantity)
            const url = `http://localhost:5000/inventory/${inventoryId}`

            const { data } = await axios.put(url, {currentQuantity })
        }

    }
    return (
        <div>
            <h2>Quantity Update page :{inventoryId}</h2>
            <form onSubmit={quantityUpdate}>
                <label htmlFor="quantity">Quantity For The Product :{inventory.quantity}</label><br /><br />
                <input type="text" placeholder='Quantity' name='quantity' /> <br /><br />
                <button>Quantity Update</button>
            </form>
        </div>
    );
};

export default QunatityUpdate;