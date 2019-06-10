import React from 'react'

const EmailSignup = () => {
  return (
    <section className="email-signup-section" aria-label="Signup for our Email">
      <form action="" className="email-signup-form">
        <label htmlFor="email-signup" className="a11y">Email Address</label>
        <div className="input-wrapper">
          <input className="input input-text" type="text" id="email-signup"/>
          <span className="email-signup-form__placeholder input-placeholder">yourname@example.com</span>
        </div>
        <input className="input input-button" type="submit" value="Sign Up"/>
      </form>
    </section>
  )
}

export default EmailSignup
