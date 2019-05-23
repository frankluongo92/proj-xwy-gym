import React from 'react'
import Divider from '../elements/Divider';
import Button from '../elements/Button';

const Hero = () => {
  return (
    <section className="hero">
      <section className="hero__text">
        <h1>Personalized Training for every body</h1>
        <Divider />
        <p>Lorem ipsum dolor amet jianbing YOLO organic cray XOXO farm-to-table helvetica vegan gentrify kale chips narwhal.</p>
        <Button />
      </section>
      <section className="hero__image-wrapper">
        <img className="hero__image" src="static/images/alora-griffiths-750374-unsplash.jpg" alt="XWY Gym"/>
      </section>
    </section>
  )
}

export default Hero
