import { Wrapper } from '../assets/wrappers/AboutComponent';
import aboutImg from '../assets/images/hero-img5.jpg';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components';

const About = () => {
  return (
    <Wrapper>
        <div className='section-center about-center'>
            <article className='about-img'>
                <img src={aboutImg} alt='About Hero Image' className='hero-photo'/>
            </article>
            <article className='about-info'>
                <SectionTitle className='sectioncomponent'>who am i?</SectionTitle>
                <p>
                I'm a Saskatchewan-based, Indigenous Metis Full-Stack Developer born and raised in Prince Albert. 
                I graduated from the Computer Systems Technology program offered by SaskPolytech in 2021 and have been working
                in the tech industry ever since. I have worked on a couple big projects for the City of Prince Albert and the 
                Restorative Action Program located in Saskatoon, SK, just to name a few. In my spare time, I love to research and
                 play around with Machine Learning applications, especially Stable Diffusion. Outside of computer related things, I 
                 consider myself a foodie and love trying out new recipes!
                </p> 
                <Link to='about' className='btn'>about me</Link>
            </article>
        </div>
    </Wrapper>
  )
}
export default About;