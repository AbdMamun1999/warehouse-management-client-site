import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyItems = () => {
    const [myItems,setMyItems] = useState([])
    const [user,loading] = useAuthState(auth)


    if(loading){
        return <Loading></Loading>
    }
   
    console.log(user.email)

    const loadMyItems = async() =>{
        const email = user.email;
        const url = `http://localhost:5000/myItems?email=${email}`;
        const {data} = await axios.get(url)
        console.log(data)
    }

    loadMyItems()

    return (
        <div>
           
        </div>
    );
};

export default MyItems;