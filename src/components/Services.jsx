import { Wrapper } from '../assets/wrappers/ServicesComponent';
import { FaCode, FaCloud, FaRobot } from 'react-icons/fa';
import { SectionTitle } from '../components';

const Services = () => {
  return (
    <Wrapper>
        <SectionTitle>services</SectionTitle>
        <div className='services-center section-center'>
            <article className='service'>
                <FaCode className='service-icon'/>
                <h4>full-stack development</h4>
                <div className='underline'></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi doloribus similique consectetur facilis, mollitia expedita 
                    nam laboriosam perferendis delectus repellendus.
                </p>
            </article>
            <article className='service'>
                <FaCloud className='service-icon'/>
                <h4>cloud technology</h4>
                <div className='underline'></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi doloribus similique consectetur facilis, mollitia expedita 
                    nam laboriosam perferendis delectus repellendus.
                </p>
            </article>
            <article className='service'>
                <FaRobot className='service-icon'/>
                <h4>machine learning</h4>
                <div className='underline'></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi doloribus similique consectetur facilis, mollitia expedita 
                    nam laboriosam perferendis delectus repellendus.
                </p>
            </article>
        </div>
    </Wrapper>
  )
}
export default Services;