import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser]= useState({
    name: '', email: '', phone: '', work: '', password: '', cPassword : '', 
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}register`, user);
      alert("Registration is Completed!!!");
      navigate('/login');
    } catch (e) {
      alert("Something went wrong Try again!!!");
    }
  }

  return (
    <form className='form-main' method='POST'>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Your name</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleInputs}
          placeholder="Your name"
          name='name'
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Your Email</label>
        <input
          type="email"
          className="form-control"
          value={user.email}
          onChange={handleInputs}
          placeholder="Enter email"
          name='email'
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Mobile phone</label>
        <input 
          type="phone" 
          name='phone' 
          className="form-control"
          value={user.phone}
          onChange={handleInputs} 
          placeholder="9876543210" 
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Your Profession</label>
        <input
          type="text" 
          name='work' 
          className="form-control"
          value={user.work}
          onChange={handleInputs} 
          placeholder="Your Profession"
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name='password'
          className="form-control"
          value={user.password}
          onChange={handleInputs}
          placeholder="Enter password"
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Confirm Your Password</label>
        <input
          name='cPassword'
          type="password"
          className="form-control"
          value={user.cPassword }
          onChange={handleInputs}
          placeholder="Confirm Your Password"
          autoComplete='off'
        />
      </div>
      <div className="d-grid">
        <button type="submit" onClick={handleRegister} className="btn btn-primary">
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  )
};


export default Signup;