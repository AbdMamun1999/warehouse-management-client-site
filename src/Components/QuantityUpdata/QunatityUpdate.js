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


    const inputValue = event => {
        const quantity = parseInt(event.target.value);
        setQuantity(quantity)
    }

    const quantityUpdate = async event => {
        event.preventDefault()

        const previousQuantity = inventory.quantity
        if (quantity > 0) {
            const currentQuantity = quantity + previousQuantity;
            console.log(currentQuantity)
            const url = `http://localhost:5000/inventory/${inventoryId}`

            const { data } = await axios.put(url, { currentQuantity })
        }

    }


    const decreaseQuantity = async event => {
        event.preventDefault()

        const previousQuantity = inventory.quantity
        if (quantity > 0) {
            const currentQuantity = previousQuantity - quantity;
            console.log(currentQuantity)
            const url = `http://localhost:5000/inventory/${inventoryId}`

            const { data } = await axios.put(url, { currentQuantity })
        }
    }

    return (
        <div>
            <h2>Quantity Update page :{inventoryId}</h2>
            {/* <form > */}
            <label htmlFor="quantity">Quantity For The Product :{inventory.quantity}</label><br /><br />
            <input type="text" onBlur={inputValue} placeholder='Quantity' name='quantity' /> <br /><br />
            <button onClick={quantityUpdate}>Added Quantity</button>
            <button onClick={decreaseQuantity}>Decrease Quantity</button>
            {/* </form> */}
        </div>
    );
};

export default QunatityUpdate;