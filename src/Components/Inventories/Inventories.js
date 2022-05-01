import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Inventories = () => {
    const [inventories,setInventories] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/inventory')
        .then(response =>{
            const {data} = response
            setInventories(data)
        })
    },[])

    return (
        <div>
            <h1 className='text-center'>Inventory</h1>
            
        </div>
    );
};

export default Inventories;