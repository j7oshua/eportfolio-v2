import { Wrapper } from '../assets/wrappers/ProjectsComponent';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components';
import project1 from '../assets/images/project-1.jpeg';
import project2 from '../assets/images/project-2.jpeg';
import project3 from '../assets/images/project-3.jpeg';
import project4 from '../assets/images/project-4.jpeg';

const Projects = () => {
  return (
    <Wrapper>
        <SectionTitle>latest projects</SectionTitle>
        <p className='projects-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Tempora ullam illo suscipit amet atque. Quos, libero quae 
            laudantium nesciunt ea animi asperiores necessitatibus magnam 
            quasi provident atque minima id consequuntur harum, sed ipsam 
            ut repudiandae tempore in quam nam. Officiis.
        </p>
        <div className='section-center projects-center'>
            <Link to='projects' className='project-1'>
                <article className='project'>
                    <img src={project1} alt='single project' className='project-img'/>
                    <div className='project-info'>
                        <h4>project title</h4>
                        <p>client name</p>
                    </div>
                </article>
            </Link>
            <Link to='projects' className='project-2'>
                <article className='project'>
                    <img src={project2} alt='single project' className='project-img'/>
                    <div className='project-info'>
                        <h4>project title</h4>
                        <p>client name</p>
                    </div>
                </article>
            </Link>
            <Link to='projects' className='project-3'>
                <article className='project'>
                    <img src={project3} alt='single project' className='project-img'/>
                    <div className='project-info'>
                        <h4>project title</h4>
                        <p>client name</p>
                    </div>
                </article>
            </Link>
            <Link to='projects' className='project-4'>
                <article className='project'>
                    <img src={project4} alt='single project' className='project-img'/>
                    <div className='project-info'>
                        <h4>project title</h4>
                        <p>client name</p>
                    </div>
                </article>
            </Link>
        </div>
    </Wrapper>
  )
}
export default Projects;