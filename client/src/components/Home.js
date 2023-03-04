import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const Home = () => {

  const [userName, setUserName] = useState('');

  const callAboutPage = async () => {
    try {
      const cookies = new Cookies();
      const token = cookies.get('jwttoken');
      const res = await axios({
        method: 'get',
        url: `${BASE_URL}about`,
        headers: {
          'Autth-token': token
        }
      })
      if (res.status !== 200) {
         const error = new Error(new Error);
         throw error;
      }
      setUserName(res.data.name);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callAboutPage();
  }, [])

  console.log(userName);

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
