import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://ancient-fjord-07745.herokuapp.com/inventories')
            .then(respose => {
                const { data } = respose
                setInventories(data)
            })
    }, [inventories])

    const handleDeleteItem = async (id) => {
        const url = `https://ancient-fjord-07745.herokuapp.com/inventory/${id}`
        const { data } = await axios.delete(url)
        if (data.deleteCount > 0) {
            const remaining = inventories.filter(inventory => inventory._id !== id)
            setInventories(remaining)
        }

    }

    
    return (
        <div>

            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stack In</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                {
                inventories.map(inventory => <InventoryProduct
                    key={inventory._id}
                    inventory={inventory}
                    handleDeleteItem={handleDeleteItem}
                ></InventoryProduct>)
            }
                   
                </tbody>
            </Table>




            <button className='add-item-button' onClick={() => navigate('/addNewItem')}>Add Item</button>
        </div>
    );
};

export default ManageInventory;