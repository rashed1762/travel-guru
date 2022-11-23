import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    // const url = `ocalhost:5000/booking/${id}`;

    // const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    // if (isLoading) {
    //     return <button className="btn loading">loading</button>
    // }
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Payment;
