import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QunatityUpdate = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})

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

            const { data } = await axios.put(url, { currentQuantity })
        }

    }


    const deliveriedQuantity = async event => {
        event.preventDefault()
        const previousQuantity = inventory.quantity
        const currentQuantity = previousQuantity - 1;
        console.log(currentQuantity)
        const url = `http://localhost:5000/inventory/${inventoryId}`

        const { data } = await axios.put(url, { currentQuantity })

    }

    return (
        <div>
            <h2>Quantity Update page :{inventoryId}</h2>
            <form onSubmit={quantityUpdate}>
                <label htmlFor="quantity">Quantity For The Product :{inventory.quantity}</label><br /><br />
                <input type="text" placeholder='Quantity' name='quantity' /> <br /><br />
                <input type="submit" value="Quantity Update" />
               
            </form>
            <button onClick={deliveriedQuantity}>Decrease Quantity</button>

        </div>
    );
};

export default QunatityUpdate;