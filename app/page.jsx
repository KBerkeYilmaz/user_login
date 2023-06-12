"use client"

import { useState } from "react";
import UserList from "./(site)/components/UserList/UserList";

import "./globals.css";

const db_users = [];

export default function Home(props) {

  // const [users, setUsers] = useState(db_users);
  const [userAge, setUserAge] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(0);

  const userAgeHandler = (event) => {
    const value = event.target.value;
    setUserAge(value);
  };
  const userNameHandler = (event) => {
    const value = event.target.value;
    setUserName(value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: userName,
      age: parseInt(userAge),
      id: userId,
    };
    db_users.unshift(newUser)
    console.log(db_users)
    // setUsers((prevUsers) => {
    //   if (prevUsers.length === 0) {
    //     return [newUser];
    //   } else {
    //     return [...prevUsers, newUser];
    //   }
    // });
    setUserId(userId + 1);
    setUserAge("");
    setUserName("");
  };




  return (
    <main className="h-screen w-screen flex flex-col justify-start items-center">
      <form
        onSubmit={formSubmitHandler}
        action=""
        className="user-form flex flex-col justify-center items-center border border-gray-700 w-2/5 h-1/3 gap-10 rounded-xl bg-gray-400 mt-5"
      >
        <div>
          <label htmlFor="">
            User Name:
            <input type="text" onChange={userNameHandler} value={userName} />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Age:
            <input type="number" onChange={userAgeHandler} value={userAge} />
          </label>
        </div>
        <button type="submit" className="bg-rose-400">
          Click
        </button>
      </form>
      <UserList users={db_users} />
    </main>
  );
}

