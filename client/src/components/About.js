import React, { useEffect, useState } from 'react';
import Person from '../images/Person.svg';
import { getUserDetails } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
 
  const getUserDetail = async () => {
    const response = await getUserDetails();
    if (response.name === 'Error')
      navigate('/login');
    setUserData(response);
  }

  useEffect(() => {
    getUserDetail();
  }, [])  
  
  return (
    <>
      <div className='form-main text-capitalize'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img src={Person} alt='here is no image' width="100" height="100"/>
            </div>
            <div className='col-md-6'>
              <div>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p>RANKINGS: 1/10</p>
              </div>
            </div>
            <div className='col-md-2'>
              <input type='button' className='edit-button' name="btnEditProfile" value='Edit Profile'/>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-4'>
              React <br />
              Javascipt <br />
              Redux <br />
              TypeScript <br />
              Nodejs <br />
              Mongodb
            </div>
            <div className='col-md-6 pl-5 about-info'>
              <h6 className='profile-text'>
                Profile Information
              </h6>
              <div className='row mt-2'>
                <div className='col-md-6'>UserID</div>
                <div className='col-md-6'>{userData._id}</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Name</div>
                <div className='col-md-6'>{userData.name}</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Email</div>
                <div className='col-md-6'>{userData.email}</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Phone</div>
                <div className='col-md-6'>{userData.phone}</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Profession</div>
                <div className='col-md-6'>{userData.work}</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About;
