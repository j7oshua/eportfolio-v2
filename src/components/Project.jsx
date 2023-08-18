import { FaHome, FaGithub } from 'react-icons/fa';

const Project = ({project}) => {
    const {name, description, sourceCodeExists, sourceCodeURL, image, websitePublic, webURL} = project;
    
    return (
        <article className='single-project'>
            <div className='project-container'>
                <img src={image} alt={name} />
                {websitePublic && <a href={webURL} className='project-icon'><FaHome /></a>}
            </div>
            <div className='project-details'>
                <h4>{name}</h4>
                <p>{description}</p>
                {sourceCodeExists && <div className='project-footer'>
                    <span><FaGithub/></span>
                    <a href={sourceCodeURL}>source code</a>
                </div>}
            </div>
        </article>
  )
}

export default Project;