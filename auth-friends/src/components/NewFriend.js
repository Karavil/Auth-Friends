import React from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";

const NewFriendForm = ({ setFriends }) => {
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      axiosWithAuth()
         .post("/api/friends", { ...data })
         .then(res => {
            console.log(res);
            setFriends(friends => [...friends, data]);
         })
         .catch(err => console.log(err));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input
            type="text"
            placeholder="username"
            name="name"
            ref={register({ required: true })}
         />
         <input
            type="number"
            placeholder="username"
            name="age"
            ref={register({ required: true })}
         />
         <input
            type="email"
            placeholder="username"
            name="email"
            ref={register({ required: true })}
         />
         <input type="submit" />
      </form>
   );
};

export default NewFriendForm;
