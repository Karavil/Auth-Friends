import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import styled from "styled-components";

import NewFriend from "./NewFriend";

const FriendCard = styled.div`
   padding: 5px;
   margin: 10px;
   border-radius: 5px;
   border: 1px solid black;
`;

const UserFriends = () => {
   const [friends, setFriends] = useState([]);
   const [loading, setLoading] = useState(false);
   const [modified, setModified] = useState(false);

   useEffect(() => {
      setModified(false);
      setLoading(true);
      axiosWithAuth()
         .get("/api/friends")
         .then(res => {
            setLoading(false);
            setFriends(res.data);
         })
         .catch(err => console.log(err));
   }, [modified]);

   const deleteFriend = id => {
      axiosWithAuth()
         .delete("/api/friends/" + id)
         .then(res => setModified(true))
         .catch(err => console.log(err));
   };

   return (
      <>
         {loading ? (
            "Loading..."
         ) : (
            <>
               {friends.map(friend => (
                  <FriendCard
                     key={friend.id}
                     onClick={() => deleteFriend(friend.id)}
                  >
                     <h3>{friend.name}</h3>
                     <p>{friend.age}</p>
                     <p>{friend.email}</p>
                     <p>{friend.description}</p>
                  </FriendCard>
               ))}
               <NewFriend setFriends={setFriends} />
            </>
         )}
      </>
   );
};

export default UserFriends;
