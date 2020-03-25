import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
   const { register, handleSubmit, errors } = useForm();
   const history = useHistory();
   const onSubmit = data => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");

      axios
         .post("http://localhost:5000/api/login", { ...data })
         .then(res => {
            localStorage.setItem(
               "token",
               JSON.stringify(
                  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ"
               )
            );
            history.push("/friends");
         })
         .catch(err => console.log(err));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input
            type="text"
            placeholder="username"
            name="username"
            ref={register({ required: true })}
         />
         <input
            type="password"
            placeholder="password"
            name="password"
            ref={register({ required: true })}
         />

         <input type="submit" />
      </form>
   );
}
