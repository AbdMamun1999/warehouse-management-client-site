import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryProduct from '../InventoryProduct/InventoryProduct';

const ManageInventory = () => {
    const [inventories,setInventories] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/inventories')
        .then(respose => {
            const {data} = respose
            setInventories(data)
        })
    },[])
    return (
        <div>
            <h3>Manage Inventory</h3>
            <div className='inventories-container'>
            {
                inventories.map(inventory => <InventoryProduct
                    key={inventory._id}
                    inventory={inventory}
                ></InventoryProduct>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;