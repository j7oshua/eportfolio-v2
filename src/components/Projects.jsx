import { Wrapper } from '../assets/wrappers/ProjectsComponent';
import { SectionTitle, ProjectLink } from '../components';
import projects from '../utils/projects';

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
            {projects.map((project) => {
                return <ProjectLink key={project.id} project={project} />
            })}
        </div>
    </Wrapper>
  )
}
export default Projects;