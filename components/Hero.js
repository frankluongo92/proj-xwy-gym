import React from 'react'
import Divider from '../elements/Divider';
import Button from '../elements/Button';
import { animated, useSpring } from 'react-spring';

const Hero = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <animated.section className="hero" style={animation}>
      <section className="hero__text">
        <h1 className="hero__h1">Personalized Training for every body</h1>
        <Divider />
        <p className="hero__copy copy--large">
          Lorem ipsum dolor amet jianbing YOLO organic cray XOXO farm-to-table helvetica vegan gentrify kale chips narwhal.
        </p>
        <Button>Start Today</Button>
      </section>
      <section
        className="hero__image-wrapper"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.img
          style={{ transform: props.xy.interpolate(trans1) }}
          className="hero__image"
          src="static/images/jonathan-borba-1339221-unsplash.jpg"
          alt="XWY Gym"
        />
      </section>
    </animated.section>
  )
}

export default Hero
