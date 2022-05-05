import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryProduct from '../InventoryProduct/InventoryProduct';

const ManageInventory = () => {
    const [inventories,setInventories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/inventories')
        .then(respose => {
            const {data} = respose
            setInventories(data)
        })
    },[inventories])


    const handleDeleteItem = async (id) =>{
        const url = `http://localhost:5000/inventory/${id}`
        const {data} = await axios.delete(url)
        if(data.deleteCount>0){
           const remaining = inventories.filter(inventory => inventory._id !== id)
           setInventories(remaining)
        }
        
    }

    return (
        <div>
            <h3 className='text-center'>Manage Inventory</h3>
            <div className='inventories-container'>
            {
                inventories.map(inventory => <InventoryProduct
                    key={inventory._id}
                    inventory={inventory}
                    handleDeleteItem={handleDeleteItem}
                ></InventoryProduct>)
            }
            </div>
            <button onClick={()=>navigate('/addNewItem')}>Add Item</button>
        </div>
    );
};

export default ManageInventory;