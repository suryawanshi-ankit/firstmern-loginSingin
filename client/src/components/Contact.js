import React, { useState, useEffect } from 'react';
import { getUserDetails } from '../utils/api';
import { getToken } from '../utils/cookies';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({name: '', email: '', phone: '', message: ''});
  const token = getToken();
  
  const getUserDetail = async () => {
    const data = await getUserDetails();
    if (data.name === 'Error')
      navigate('/login');
    setUserData({...userData, name: data.name, email: data.email, phone: data.phone, message: data.message});
  }

  useEffect(() => {
    getUserDetail();
  }, [])
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]: value})
  }

  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}contact`, userData, {
        headers: {
          'Autth-token': token,
          'Content-Type': 'application/json'
        }
      })
      if (res.data) {
        alert('message Submitted');
        setUserData({...userData, message: ""});
      } else {
        console.log('Message not Submitted');
      }
    } catch (e) {
      alert("Something went wrong Try again!!!");
    }
  }
    
  return (
    <div class="container text-capitalize">
      <div class="row mt-4 offset-1">
        <div class="col col-contact">
          <div>Phone</div>
          <div>{userData.phone}</div>
        </div>
        <div class="col col-contact">
          <div>Email</div>
          <div>{userData.email}</div>
        </div>
        <div class="col col-contact">
          <div>Address</div>
          <div>New Delhi, India</div>
        </div>
      </div>
      <div class="row mt-4 offset-2">
        <div class="col-10 col-contact p-4 h-auto">
          <div><h5>Get in Touch</h5></div>
          <div>
            <form method='POST'>
              <div className='d-flex'>
                <div className="mb-3" style={{marginRight: '12px'}}>
                  <input
                    type="text"
                    value={userData.name}
                    placeholder="Your name"
                    name='name'
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3" style={{marginRight: '12px'}}>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    name='email'
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="number" 
                    name='number' 
                    value={userData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number" 
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className="mb-3 mt-4">
                <textarea
                  cols={77}
                  rows={10}
                  name='message'
                  onChange={handleChange}
                  placeholder="Message" 
                  autoComplete='off'
                  style={{padding: '20px'}}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary" onClick={submitMessage}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
