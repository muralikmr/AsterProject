import React from 'react'
import "../styles/contact.css"

const contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className="contact-inner">
        <form action="">
          <div className="form-group">
            <label>Fullname</label>
            <input type="text" name="" placeholder='enter fullname' id="" />

          </div>
          <div className="form-group">
          <label>Emailid</label>
            <input type="email" name="" placeholder='enter email' id="" />
          </div>
          <div className="form-group">
          <label>phone number</label>
            <input type="text" name="" placeholder='enter phone number' id="" />
          </div>
          <div className="form-group">
          <label>Any queries</label>
            <input type="text" name="" placeholder='tell us about your query' id="" />
          </div>
          <div className="form-submit">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default contact