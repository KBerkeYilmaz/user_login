'use client';
import { useState } from 'react';
import FormUser from "./components/UserForm/FormUser"
import UserList from "./components/UserList/UserList"


export default function Index(props){
    
    const [users, setUsers] = useState([])

    const newUserHandler = (data) => {
        setUsers(prevState => {
           return [data,...prevState]
        })

    }

    return (
        <main className="min-h-screen max-h-fit w-screen flex flex-col justify-start items-center">
            <FormUser onSubmit={newUserHandler}/>
            <UserList users={users} />
        </main>
    )          
};