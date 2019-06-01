import React from 'react'

const Section = ({ children, theme }) => {
  return (
    <section className={`layout section section--${theme}`}>
      <div className="section__content">
        { children }
      </div>
    </section>
  )
}

Section.defaultProps = {
  theme: '',
};

export default Section
