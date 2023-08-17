import { Wrapper } from '../assets/wrappers/About';
import { Footer, SectionTitle } from '../components';

const About = () => {
  return (
    <Wrapper>
      <SectionTitle>About Me</SectionTitle>
      <div className='section-center page-info'>
        <p>
          Hello, my name is Joshua Grimard and I am a Full-Stack Developer.
          I live and work in Prince Albert, Saskatchewan. I spend most of my
          day experimenting with HTML, CSS and JavaScript (and the endless list of
          frameworks). I enjoy coding and the challenge of learning something new 
          everyday. 
        </p>
      </div>
      <Footer />
    </Wrapper>
  )
}
export default About;