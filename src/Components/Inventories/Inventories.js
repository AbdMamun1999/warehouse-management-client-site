import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/inventory')
            .then(response => {
                const { data } = response
                setInventories(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-center'>Inventory</h1>
            <div className='inventories-container'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>

        </div>
    );
};

export default Inventories;