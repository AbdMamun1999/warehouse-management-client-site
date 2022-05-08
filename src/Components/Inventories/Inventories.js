import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        setIsLoading(!isLoading)
        axios.get('https://ancient-fjord-07745.herokuapp.com/inventory')
        .then(response =>{
            const {data} = response;
            setInventories(data)
        })
    },[])

    return (
        <div >
            <h1 className='text-center'>Inventory</h1>
            <div className='inventories-container'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
                <button className='manageInventory-button d-block mx-auto' onClick={()=>navigate('/manageInventory')}>Manage Inventory</button>
                
        </div>
    );
};

export default Inventories;