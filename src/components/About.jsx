import { Wrapper } from '../assets/wrappers/AboutComponent';
import aboutImg from '../assets/images/hero-img2.jpg';
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
                <SectionTitle className='sectioncomponent'>about</SectionTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Fuga nemo perspiciatis iusto inventore 
                    ullam eveniet. Dolorem sint repellendus recusandae expedita reprehenderit 
                    illo molestiae ducimus, perspiciatis suscipit voluptatem itaque consequatur ut.
                    Fuga nemo perspiciatis iusto inventore 
                    ullam eveniet. Dolorem sint repellendus recusandae expedita reprehenderit 
                    illo molestiae ducimus, perspiciatis suscipit voluptatem itaque consequatur ut.
                </p>
                <Link to='about' className='btn'>about me</Link>
            </article>
        </div>
    </Wrapper>
  )
}
export default About;