import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/inventory')
        .then(response =>{
            const {data} = response;
            setInventories(data)
        })
    },[])

    return (
        <div className='text-center'>
            <h1 className='text-center'>Inventory</h1>
            <div className='inventories-container'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
                <button onClick={()=>navigate('/manageInventory')}>Manage Inventory</button>
        </div>
    );
};

export default Inventories;