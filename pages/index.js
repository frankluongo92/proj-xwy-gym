// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Hero from '../components/Hero';
import Section from '../components/Section';



const Home = () => {
  return (
    <Section>
      <Hero />
    </Section>
  )
}

export default Home;

/*
</ParallaxLayer>
<Parallax ref={ref => (this.parallax = ref)} pages={3}>
      <ParallaxLayer offset={1} speed={1}>
        <Section>
          <Hero />
        </Section>
      </ParallaxLayer>
    </Parallax>
</ParallaxLayer>
*/
