import React from "react";
import {useSelector} from "react-redux"
// add any needed imports here

function Users() {
  const state = useSelector(state => state.users)  
  console.log(state);
   return (
     <div>
       <ul>
         Users!
         {state.map((user)=><li>{user.username}</li>)}
        
       </ul>
       <p>{`Total Users: ${state.length}`}</p>
     </div>
   );
}

export default Users;
