import React, { useEffect, useState } from 'react';

const Inventories = () => {
    const [inventories,setInventories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h1 className='text-center'>Inventory</h1>
        </div>
    );
};

export default Inventories;