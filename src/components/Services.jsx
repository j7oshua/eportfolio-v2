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
                    I have worked on multiple professional projects doing front-end,
                    back-end work and strongly skilled in the latest technolgies. I can
                     create the application that you always dreamed of!
                </p>
            </article>
            <article className='service'>
                <FaCloud className='service-icon'/>
                <h4>cloud technology</h4>
                <div className='underline'></div>
                <p>
                    Certifed in Amazon Web Services as a Foundational Cloud Practitioner. I can help 
                    to move your business into the cloud.
                </p>
            </article>
            <article className='service'>
                <FaRobot className='service-icon'/>
                <h4>machine learning</h4>
                <div className='underline'></div>
                <p>
                    Experienced in working with Machine Learning (ML) models for business clients.
                    If you are needing a ML model for your business, gladly reach out and I can offer
                    some of my advice.
                </p>
            </article>
        </div>
    </Wrapper>
  )
}
export default Services;