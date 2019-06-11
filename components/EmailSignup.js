import React, { useState, useRef } from 'react'
import { animated, useSpring } from 'react-spring';


const EmailSignup = () => {
  const [isActiveInput, setInputState] = useState(false);
  const placeholder = useRef(null);
  const input = useRef(null);

  const animation = useSpring({
    opacity: isActiveInput ? 1 : 0.5,
    transform: isActiveInput ? 'translate3d(0, -50%, 0)' : 'translate3d(0, 50%, 0)',
    fontWeight: isActiveInput ? 'bold' : 'normal',
    backgroundColor: isActiveInput ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'
  });

  function animatePlaceholderIn () {
    placeholder.current.innerText = "Email Address";
    setInputState(true)
  }

  function animatePlaceholderOut () {
    if (!input.current.value.length > 0) {
      placeholder.current.innerText = "yourname@example.com";
      setInputState(false)
    }
  }

  return (
    <section className="email-signup-section" aria-label="Signup for our Email">
      <form action="" className="email-signup-form">
        <label htmlFor="email-signup" className="a11y">Email Address</label>
        <div className="input-wrapper">
          <input
            ref={input}
            onFocus={animatePlaceholderIn}
            onBlur={animatePlaceholderOut}
            className="input input-text"
            type="text"
            id="email-signup"
          />
          <animated.span ref={placeholder} className="email-signup-form__placeholder input-placeholder" style={animation}>
            yourname@example.com
          </animated.span>
        </div>
        <input className="input input-button" type="submit" value="Sign Up"/>
      </form>
    </section>
  )
}

export default EmailSignup
