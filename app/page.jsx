'use client'

import { useState,useEffect } from 'react';

const db_users=[]

export default function Home() {
  


  const [users, setUsers] = useState(db_users);
  const [userAge, setUserAge] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    console.log(users);
  }, [users]);

  const userAgeHandler = (event) => {
        const value = event.target.value;
        setUserAge(value)
  }
  const userNameHandler = (event) => {
        const value = event.target.value
        setUserName(value)
  }
  const formSubmitHandler = (event) => {
        event.preventDefault();
        const newUser = {
          name: userName,
          age: parseInt(userAge),
          id: userId
        };
        setUsers((prevUsers) => {
        if (prevUsers.length === 0) {
        return [newUser]
        }  else {
        return [...prevUsers, newUser]
        }});
        setUserId(userId + 1);
        setUserAge('');
        setUserName('');          
  }

  return (
    <main className='h-screen w-screen bg-slate-400 flex justify-center items-center'>
      <form onSubmit={formSubmitHandler} action="" className='flex flex-col justify-center items-center border border-gray-700 w-2/5 h-1/3 gap-10 rounded-xl'>
        <div>
          <label htmlFor="">User Name:
          <input type="text" onChange={userNameHandler} value={userName}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Age:
          <input type="number" onChange={userAgeHandler} value={userAge}/>
          </label>
        </div>
        <button type="submit" className='bg-rose-400'>Click</button>
      </form> 
    </main>
  )
}
