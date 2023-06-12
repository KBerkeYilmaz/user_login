'use client'

import { useState } from "react";

const db_users = [];

const FormUser = () => {
  const [users, setUsers] = useState(db_users);
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
    setUsers((prevUsers) => {
      if (prevUsers.length === 0) {
        return [newUser];
      } else {
        return [...prevUsers, newUser];
      }
    });
    setUserId(userId + 1);
    setUserAge("");
    setUserName("");
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      action=""
      className="user-form flex flex-col justify-center items-center border border-gray-700 w-2/5 h-1/3 gap-10 rounded-xl bg-gray-400"
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
  );
};

export default FormUser;
