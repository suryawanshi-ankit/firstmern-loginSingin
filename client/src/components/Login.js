import React from 'react';

const Login = () => {
  return (
    <form className='form-main'>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name='email'
          className="form-control"
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
          placeholder="Enter password"
          autoComplete='off'
        />
      </div>
      {/* <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div> */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </div>
      {/* <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p> */}
    </form>
  )
}

export default Login;