import { Wrapper } from '../assets/wrappers/Projects';
import { Footer, SectionTitle, Project } from '../components/index';
import projects from '../utils/projects';

const Projects = () => {
  return (
    <Wrapper>
      <header className='projects-hero'>
        <SectionTitle>My Projects</SectionTitle>
      </header>
      <section className='section'> 
        <div className='section-center projects-page-center'>
          {projects.map((project) => {
            return <Project key={project.id} project={project}/>
          })}
        </div>
      </section>
      <Footer />
    </Wrapper>
  )
}
export default Projects;