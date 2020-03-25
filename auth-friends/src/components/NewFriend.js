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
            placeholder="Friend's name"
            name="name"
            ref={register({ required: true })}
         />
         <input
            type="number"
            placeholder="Age"
            name="age"
            ref={register({ required: true })}
         />
         <input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({ required: true })}
         />
         <input
            type="text"
            placeholder="Friend's description"
            name="description"
            ref={register({ required: true })}
         />
         <input type="submit" />
      </form>
   );
};

export default NewFriendForm;
