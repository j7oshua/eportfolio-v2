import { Wrapper } from '../assets/wrappers/Contact';
import { Footer, SectionTitle } from '../components';

const Contact = () => {
  return (
    <Wrapper>
      <SectionTitle>Contact</SectionTitle>
        <div className='section-center page-info'>
          <p>
            If you are looking to get ahold of me, you can send me an email at
            <a href='mailto:jgrimard22@gmail.com'> jgrimard22@gmail.com</a>
          </p>
        </div>
        <Footer />
    </Wrapper>
  )
}
export default Contact;