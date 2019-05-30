// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';



const Home = () => {
  return (
    <>
    <Section theme="red-gray">
      <Hero />
    </Section>
    <Section theme="darkblue-white">
      <SectionHeading
        theme="light"
        heading="Why you should workout with us"
        copy="Slow-carb selfies meggings, meh subway tile waistcoat photo booth typewriter chillwave ramps semiotics shabby chic fam. Biodiesel poke keffiyeh meh pitchfork narwhal truffaut franzen."
      />
    </Section>
    </>
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
