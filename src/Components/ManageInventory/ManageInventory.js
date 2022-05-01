import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInventory = () => {
    const [inventory,setInventory] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/inventories')
        .then(respose => {
            console.log(respose)
            const {data} = respose
            console.log(data)
        })
    },[])
    return (
        <div>
            <h3>Manage Inventory</h3>
            {
            }
        </div>
    );
};

export default ManageInventory;