// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import TileWrapper from '../components/TileWrapper';
import Tile from '../components/Tile';

import Button from '../elements/Button';
import EmailSignup from '../components/EmailSignup';
import CallToActionTile from '../components/CallToActionTile';
import CallToActionTileWrapper from '../components/CallToActionTileWrapper';



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
        <Tile color="blue">
          <h3 className="h3 tile__h3">Personalized Training</h3>
          <ul className="list tile__list">
            <li>Gluten-free iceland biodiesel shabby chic</li>
            <li>hella crucifix aesthetic portland thundercats hammock</li>
            <li>vexillologist food truck</li>
          </ul>
          <Button theme="secondary">Start Now</Button>
        </Tile>
        <Tile color="yellow">
          <h3 className="h3 tile__h3">New Content, Daily</h3>
          <p className="copy tile__copy">Four loko drinking vinegar try-hard raw denim, pour-over la croix poke normcore bushwick chia enamel pin. Woke edison bulb typewriter quinoa unicorn.</p>
          <Button theme="secondary">Start Now</Button>
        </Tile>
        <Tile color="green">
          <h3 className="h3 tile__h3">Active Community</h3>
          <p className="copy tile__copy">Vape helvetica live-edge street art hella crucifix polaroid authentic farm-to-table ramps lumbersexual.</p>
          <Button theme="secondary">Start Now</Button>
        </Tile>
        <Tile color="red">
          <h3 className="h3 tile__h3">Meal Prep made easy</h3>
          <p className="copy tile__copy">Keytar vice small batch, poutine seitan next level occupy farm-to-table. Jean shorts kale chips everyday carry vinyl meditation. Umami shaman dreamcatcher gochujang, subway tile trust fund hammock.</p>
          <Button theme="secondary">Start Now</Button>
        </Tile>
      </TileWrapper>
    </Section>
    <Section>
      <SectionHeading
        theme="dark"
        heading="The xwy model"
        copy="Leggings af narwhal crucifix authentic glossier cornhole pinterest godard tousled"
      />
      <CallToActionTileWrapper>
        <CallToActionTile />
        <CallToActionTile
          copy='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sit ipsum consequatur odio'
          image='/static/images/kyle-johnson-389070-unsplash.jpg'
          modifier='large'
          price='$4.99'
          subscriptionType='Premium'
        />
        <CallToActionTile
          copy='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sit ipsum consequatur odio'
          image='/static/images/meghan-holmes-1057329-unsplash.jpg'
          price='$9.99'
          subscriptionType='Platinum'
        />
      </CallToActionTileWrapper>
    </Section>
    <EmailSignup />
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
