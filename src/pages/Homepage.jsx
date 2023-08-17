import { Wrapper } from '../assets/wrappers/Homepage';
import { 
  HeroBanner, 
  About, 
  Services, 
  Projects,
  Footer
} from '../components';

const Homepage = () => {
  return (
    <Wrapper>
        <HeroBanner />
        <About />
        <Services />
        <Projects />
        <Footer />
    </Wrapper>
  )
}
export default Homepage;