'use client';
import { useState } from 'react';
import FormUser from "./components/UserForm/FormUser"
import UserList from "./components/UserList/UserList"
import MainFlexCol from './components/UI/MainFlexCol';

export default function Index(props){
    
    const [users, setUsers] = useState([])

    const newUserHandler = (data) => {
        setUsers(prevState => {
           return [data,...prevState]
        })

    }

    return (
        <MainFlexCol className='justify-start items-center'>
            <FormUser onSubmit={newUserHandler}/>
            <UserList users={users} />
        </MainFlexCol>
    )          
};