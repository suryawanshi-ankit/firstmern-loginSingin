import React from 'react';
import Person from '../images/Person.svg';

const About = () => {
  return (
    <>
      <div className='form-main'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img src={Person} alt='here is no image' width="100" height="100"/>
            </div>
            <div className='col-md-6'>
              <div>
                <h5>Ankit Suryawanshi</h5>
                <h6>Web Developer</h6>
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
                <div className='col-md-6'>1111111</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Name</div>
                <div className='col-md-6'>Ankit</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Email</div>
                <div className='col-md-6'>ankit@123</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Phone</div>
                <div className='col-md-6'>9876543210</div>
              </div>
              <div className='row'>
                <div className='col-md-6'>Profession</div>
                <div className='col-md-6'>Web Developer</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About;