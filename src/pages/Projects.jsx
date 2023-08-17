import { Wrapper } from '../assets/wrappers/Projects';
import { Footer, SectionTitle } from '../components';
import project1 from '../assets/images/project-1.jpeg';
import { FaHome, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <Wrapper>
      <header className='projects-hero'>
        <SectionTitle>My Projects</SectionTitle>
      </header>
      <section className='section'> 
        <div className='section-center projects-page-center'>
          <article className='single-project'>
            <div className='project-container'>
              <img src={project1} alt='project1' />
              <a href='https://www.joshuagrimard.com' className='project-icon'>
                <FaHome />
              </a>
            </div>
            <div className='project-details'>
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt iure aliquid accusamus 
                voluptatem quae aliquam aspernatur natus fuga numquam ipsum quidem necessitatibus assumenda 
                nulla eligendi repellendus id blanditiis 
                dolore minus labore beatae consequuntur, harum odit. Quos tempore soluta architecto quis?
              </p>
              <div className='project-footer'>
                <span><FaGithub /></span>
                <a href='https://www.github.com/j7oshua'>
                  source code
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </Wrapper>
  )
}
export default Projects;