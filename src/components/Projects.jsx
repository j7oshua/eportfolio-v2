import { Wrapper } from '../assets/wrappers/ProjectsComponent';
import { SectionTitle, ProjectLink } from '../components';
import projects from '../utils/projects';

const Projects = () => {
  return (
    <Wrapper>
        <SectionTitle>latest projects</SectionTitle>
        <p className='projects-text'>
            Some of my latest projects include building an invoice management application for the finance team at the City
             of Prince Albert, a AI image generation application that allows the community to create and share images that
             they created, and a application for the facilitators at the Restorative Action Program for keeping track of their
             meetings with students. 
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