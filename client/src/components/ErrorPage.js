import React from 'react';
import ErrorPageImg from '../images/404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className='error-page'>
      <img src={ErrorPageImg} />
    </div>
    <div className='error-page'>
      <Link className="nav-link" to="/">Return to Home Page</Link>
    </div>
    </>
  )
}

export default ErrorPage;
