import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  return (
    <form className='form-main'>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Your name</label>
        <input
          type="text"
          className="form-control"
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
          placeholder="Enter email"
          name='email'
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Mobile Number</label>
        <input 
          type="number" 
          name='number' 
          className="form-control" 
          placeholder="9876543210" 
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Your Profession</label>
        <input
          type="text" 
          name='profession' 
          className="form-control" 
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
          placeholder="Enter password"
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Confirm Your Password</label>
        <input
          name='confirm_password'
          type="password"
          className="form-control"
          placeholder="Confirm Your Password"
          autoComplete='off'
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
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