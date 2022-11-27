import React from 'react'
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role,}=user;

    const makeAdmin=()=>{
        fetch(`https://aqueous-gorge-39231.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch();
            toast.success('successfyll')
        })
    }
    
    
  return (
    

<tr>
                <th>1</th>
                <td>{email}</td>
                <td> {role !=='admin'  && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>  } 
                {role && 'admin'  && <p className='admin'>Admin</p>  }
                
                
                 </td>
                <td>remove user</td>
              </tr>
    
  )
}

export default UserRow