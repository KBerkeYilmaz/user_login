'use client'

import { useState } from "react";
import styles from '../UI/Glass.module.css'



const FormUser = (props) => {
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
    props.onSubmit(newUser);
    setUserId(userId + 1);
    setUserAge("");
    setUserName("");
  };
  return (
    <form
        onSubmit={formSubmitHandler}
        action=""
        className={`${styles.glass}
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    border 
                    w-2/5 h-1/3 
                    gap-10 
                    rounded-xl 
                    mt-5`}
      >
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-5 my-5">
          <div>
            <label
              className="text-3xl 
                        bg-clip-text 
                        text-transparent 
                        bg-gradient-to-r 
                         from-fuchsia-700 
                         to-indigo-900"
              htmlFor=""
            >
              User Name:
              <input
                className="rounded-md text-black w-full"
                type="text"
                onChange={userNameHandler}
                value={userName}
                required
              />
            </label>
          </div>
          <div>
            <label
              className=" text-3xl 
                          bg-clip-text 
                          text-transparent 
                          bg-gradient-to-r 
                          from-fuchsia-700 
                          to-indigo-600"
              htmlFor=""
            >
              Age:
              <input
                className="rounded-md text-black w-full"
                type="number"
                onChange={userAgeHandler}
                value={userAge}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-rose-800
                      w-1/2
                      h-1/6
                      p-5
                      rounded-full
                      "
          >
            Add New User
          </button>
        </div>
      </form>

  );
};

export default FormUser;
