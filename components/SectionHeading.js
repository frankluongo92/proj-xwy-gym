import React from 'react'

const SectionHeading = ({ heading, copy, theme }) => {


  return (
    <div className={`container section-heading-container section-heading--${theme}`}>
      <h2 className="h2 section-heading__heading">{heading}</h2>
      {copy && <p className="copy section-heading__copy">{copy}</p>}
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'Fake Heading',
  copy: 'lorem ipsum dolor sit amet',
  theme: ''
};

export default SectionHeading
