import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import Cookies from 'universal-cookie';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email, password);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}signin`, {email: email, password: password});
      console.log(res);
      const cookies = new Cookies();
      cookies.set('jwttoken', res.data.token, {
        expires: new Date(Date.now() + 258920000),
      });
      alert("Login is Done!!!");
      navigate('/');
    } catch (e) {
      alert("Something went wrong Try again!!!");
    }
  }

  return (
    <form className='form-main' method='POST'>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name='email'
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          autoComplete='off'
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autoComplete='off'
        />
      </div>
      <div className="d-grid">
        <button type="submit" onClick={handleLogin} className="btn btn-primary">
          Log In
        </button>
      </div>
    </form>
  )
}

export default Login;