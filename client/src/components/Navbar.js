import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [isUserLogin, setIsUserLogin] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove('jwttoken');
    navigate('/');
    setIsUserLogin(false);
  }

  useEffect(() => {
    const token = cookies.get('jwttoken');
    if (token)
      setIsUserLogin(true);
  }, [cookies.get('jwttoken')])
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" style={{marginLeft: 'auto'}}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {!isUserLogin && <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Registration</Link>
              </li>
            </>}
            {isUserLogin && <li className="nav-item">
              <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </li>}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;