import { Link } from 'react-router-dom';

const ProjectLink = ({project}) => {
    const {name, client, image, cName} = project;
  return (
    <Link to='projects' className={cName}>
        <article className='project'>
            <img src={image} alt={name} className='project-img'/>
            <div className='project-info'>
                <h4>{name}</h4>
                <p>{client}</p>
            </div>
        </article>
    </Link>
  )
}
export default ProjectLink;