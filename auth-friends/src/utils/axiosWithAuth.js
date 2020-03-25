import axios from "axios";

export const axiosWithAuth = () => {
   const token = JSON.parse(localStorage.getItem("token"));
   const withAuth = axios.create({
      baseURL: "http://localhost:5000",
      headers: {
         Authorization: token
      }
   });

   return withAuth;
};
