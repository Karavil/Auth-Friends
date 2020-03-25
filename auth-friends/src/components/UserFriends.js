import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const UserFriends = () => {
   const [friends, setFriends] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axiosWithAuth()
         .get("/api/friends")
         .then(res => {
            setLoading(false);
            setFriends(res.data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         {loading
            ? "Loading..."
            : friends.map(friend => (
                 <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                 </div>
              ))}
      </>
   );
};

export default UserFriends;
