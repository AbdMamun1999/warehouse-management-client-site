import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()


    if (loading) {
        return <Loading></Loading>
    }

    const loadMyItems = async () => {
        const email = user.email;
        const url = `http://localhost:5000/myItems?email=${email}`;
        try{
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyItems(data)
        }
        catch(error){
            console.log(error.massage);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth)
                navigate('/login')
            }
        }
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