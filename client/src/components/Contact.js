import React from 'react';

const Contact = () => {
  return (
    <div class="container ">
      <div class="row mt-4 offset-1">
        <div class="col col-contact">
          <div>Phone</div>
          <div>+912255336699</div>
        </div>
        <div class="col col-contact">
          <div>Email</div>
          <div>contact@gmail.com</div>
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
            <form>
              <div className='d-flex'>
                <div className="mb-3" style={{marginRight: '12px'}}>
                  <input
                    type="text"
                    placeholder="Your name"
                    name='name'
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3" style={{marginRight: '12px'}}>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    autoComplete='off'
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="number" 
                    name='number' 
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
                  placeholder="Message" 
                  autoComplete='off'
                  style={{padding: '20px'}}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
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