import React from 'react'

function Contactus() {
  return (
  <>
    <div className="container my-5">
    <section className='my-5 d-flex justify-content-center'>
        <form className="form my-5">
        <p className="form-title fw-bold">CONTACT US</p>
        <div className="input-container">
            <input type="text" placeholder="Full Name" required />
            <span>
            </span>
        </div>
        <div className="input-container">
            <input type="email" placeholder="Enter email" required/>
            <span>
            </span>
        </div>
        <div className="input-container">
            <input type="text" placeholder="Enter Phone no." />
        </div>
        <div className="input-container">
            <textarea className='form-control' placeholder="Enter your message" rows="4" required></textarea>
            <span>
            </span>
        </div>
        <button type="submit" className="submit">
            Sign in
        </button>
        </form>
    </section>
    </div>
    </>
  )
}

export default Contactus