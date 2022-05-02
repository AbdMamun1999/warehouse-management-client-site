import axios from 'axios';
import React from 'react';

const AddNewItem = () => {
    const addItem =async event =>{
        event.preventDefault()
        const img = event.target.url.value;
        const name = event.target.name.value;
        const url = `http://localhost:5000/inventory`
        const {data} = await axios.post(url,{img,name})
    }
    return (
        <div>
            <h1>Add New Item</h1>
            <form onSubmit={addItem}>
                <input type="text" name="url" id="" placeholder='Image Url'/>
                <input type="text" name="name" id="" placeholder='Name'/>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;<h1>Add New Item</h1>