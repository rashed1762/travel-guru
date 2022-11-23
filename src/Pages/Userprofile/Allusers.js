import React from 'react'
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Allusers = () => {
   
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    
   
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
  return (
    <div>Allusers {users.length}
    
    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Favorite Color</th>
        
      </tr>
    </thead>
    <tbody>

        {
            users.map(user=>
                
              <UserRow
              user={user}
              refetch={refetch}
              ></UserRow>
                
            )
        }
     
    </tbody>
  </table>
</div>
    
    
    
    </div>
  )
}

export default Allusers;