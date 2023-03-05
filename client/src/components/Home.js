import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../utils/api';

const Home = () => {
  const [userName, setUserName] = useState('');

  const getUserDetail = async () => {
    const response = await getUserDetails();
    console.log(response);
    setUserName(response.name);
  }

  useEffect(() => {
    getUserDetail();
  }, [])

  return (
    <>
      <div className='home-page'>
        <div className='home-div'>
          <p className='pt-5'>WELCOME</p>
          <h1 className='text-capitalize'>{userName}</h1>
          <h1>{userName ? 'Happy, to see you back' : 'We Are The MERN Developer'}</h1>
        </div>
      </div>
    </>
  )
}

export default Home;
