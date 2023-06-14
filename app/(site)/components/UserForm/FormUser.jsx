"use client";

import { useState } from "react";
import styles from "../UI/Glass.module.css";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";

const FormUser = (props) => {
  const [userAge, setUserAge] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(0);
  const [isValid, setIsValid] = useState(true);
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
    if (userName.length === 0 || userAge.length === 0 || parseInt(userAge) <= 0) {
      setIsValid(false);
    } else { {
      setIsValid(true);
      const newUser = {
        name: userName,
        age: parseInt(userAge),
        id: userId,
      };
      props.onSubmit(newUser);
      setUserId(userId + 1);
      setUserAge("");
      setUserName("");
    }
  }};

  return (
    <>
    {!isValid && <Modal />}
    <form
      onSubmit={formSubmitHandler}
      action=""
      isValid={isValid}
      className={`${styles.glass}
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    border 
                    w-2/5 h-1/3 
                    gap-10 
                    rounded-xl 
                    mt-5
                    `}
    >
      <div
        className="   w-1/2 
                      h-full 
                      flex 
                      flex-col 
                      justify-center 
                      items-center 
                      gap-5 
                      my-5"
      >
        <div>
          <label
            className=" text-3xl
                        font-bold 
                        bg-clip-text 
                        text-transparent 
                        bg-gradient-to-r 
                         from-fuchsia-700 
                         to-indigo-900"
            htmlFor=""
          >
            User Name:
            <input
              className="rounded-md text-black font-normal w-full"
              type="text"
              max={20}
              onChange={userNameHandler}
              value={userName}
              
            />
          </label>
        </div>
        <div>
          <label
            className=" text-3xl 
                          bg-clip-text 
                          text-transparent
                          font-bold 
                          bg-gradient-to-r 
                          from-fuchsia-700 
                          to-indigo-600"
            htmlFor=""
          >
            Age:
            <input
              className="rounded-md text-black font-normal w-full"
              type="number"
              onChange={userAgeHandler}
              value={userAge}
              
            />
          </label>
        </div>
        <Button type="submit">Add New User</Button>
      </div>
    </form>
    </>
  );
};

export default FormUser;
