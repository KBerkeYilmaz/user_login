'use client'

import { useState } from 'react';

const db_users=[]

export default function Home() {
  
  const [users, setUsers] = useState(db_users);
  
  const userAgeHandler = (event) => {
        const target = event.target.value;
        setUsers((prevValues) => {
          
        })
  }
  const userNameHandler = (event) => {
        const target = event.target.value

  }
  const formSubmitHandler = (event) => {
        event.preventDefault()
        
  }

  return (
    <main className='h-screen w-screen bg-slate-400 flex justify-center items-center'>
      <form onSubmit={formSubmitHandler} action="" className='flex flex-col justify-center items-center border border-gray-700 w-2/5 h-1/3 gap-10 rounded-xl'>
        <div>
          <label htmlFor="">User Name:
          <input type="text" onChange={userNameHandler}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Age:
          <input type="number" onChange={userAgeHandler}/>
          </label>
        </div>
      </form>
    </main>
  )
}
