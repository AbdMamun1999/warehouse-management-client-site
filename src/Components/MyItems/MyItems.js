import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    const [user, loading] = useAuthState(auth)


    if (loading) {
        return <Loading></Loading>
    }


    const loadMyItems = async () => {
        const email = user.email;
        const url = `http://localhost:5000/myItems?email=${email}`;
        const { data } = await axios.get(url)
        setMyItems(data)
    }

    loadMyItems()


    const handleMyItemDelete = async (id) => {
        console.log(id)
        const confirm = window.confirm('Are sure delete the item')
        if (confirm) {
            const url = `http://localhost:5000/inventory/${id}`
            const { data } = axios.delete(url)
        }

    }

    return (
        <div>
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(myItem => <MyItem
                            key={myItem._id}
                            myItem={myItem}
                            handleMyItemDelete={() => handleMyItemDelete(myItem._id)}
                        ></MyItem>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;