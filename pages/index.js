// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import TileWrapper from '../components/TileWrapper';
import Tile from '../components/Tile';

import Button from '../elements/Button';



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
      <TileWrapper>
        <Tile>
          <h2 className="h2 tile__h2">Personalized Training</h2>
          <ul className="list tile__list">
            <li>Gluten-free iceland biodiesel shabby chic</li>
            <li>hella crucifix aesthetic portland thundercats hammock</li>
            <li>vexillologist food truck</li>
          </ul>
          <Button>Start Now</Button>
        </Tile>
        <Tile>
          <h2 className="h2 tile__h2">Active Community</h2>
          <p className="copy">Vape helvetica live-edge street art hella crucifix polaroid authentic farm-to-table ramps lumbersexual.</p>
          <Button>Start Now</Button>
        </Tile>
        <Tile>
          <h2 className="h2 tile__h2">New Content, Daily</h2>
          <p className="copy">Four loko drinking vinegar try-hard raw denim, pour-over la croix poke normcore bushwick chia enamel pin. Woke edison bulb typewriter quinoa unicorn.</p>
          <Button>Start Now</Button>
        </Tile>
        <Tile>
          <h2 className="h2 tile__h2">Meal Prep made easy</h2>
          <p className="copy">Keytar vice small batch, poutine seitan next level occupy farm-to-table. Jean shorts kale chips everyday carry vinyl meditation. Umami shaman dreamcatcher gochujang, subway tile trust fund hammock.</p>
          <Button>Start Now</Button>
        </Tile>
      </TileWrapper>
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
