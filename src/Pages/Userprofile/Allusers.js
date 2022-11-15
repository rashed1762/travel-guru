import React from 'react'
import { useQuery } from 'react-query';

const Allusers = () => {
   
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${users.email}`,{
            method:'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    
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
            users.map(user=>{
                
                const {email}=user;
                return(
                <tr>
                <th>1</th>
                <td>{email}</td>
                <td><button onClick={makeAdmin} className="btn btn-xs">Make Admin</button></td>
                <td>remove user</td>
              </tr>
                )
            })
        }
     
    
     
      
      
      
    </tbody>
  </table>
</div>
    
    
    
    </div>
  )
}

export default Allusers;