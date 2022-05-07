import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddNewItem.css'

const AddNewItem = () => {
    const [user] = useAuthState(auth)

    const addItem = async event => {
        event.preventDefault()
        const email = user.email;
        const img = event.target.url.value;
        const name = event.target.name.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;
        const addedProduct = {name,email,img,price,quantity,supplier,description}
        const url = `http://localhost:5000/inventory`
        const { data } = await axios.post(url,addedProduct)
    }
    return (
        <div className='added-item'>
            <h1>Add new item</h1>
            <form onSubmit={addItem} className="form-sumbit">
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="text" name="url" id="" placeholder='Image Url' />
                <input type="text" name="price" id="" placeholder='Price' />
                <input type="text" name='quantity' placeholder='Quantity' />
                <input type="text" name="supplier" id="" placeholder="Supplier's Name"/>
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem; <h1>Add New Item</h1>