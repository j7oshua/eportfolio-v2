import project1 from '../assets/images/project-1.jpeg';
import project2 from '../assets/images/project-2.jpeg';
import project3 from '../assets/images/project-3.jpeg';
import project4 from '../assets/images/project-4.jpeg';
import project5 from '../assets/images/project-5.jpeg';

const projects = [
    {
        id: 1,
        cName: 'project-1',
        name: 'Sasktel Invoice Management',
        image: project1,
        description: "Built using React, Express JS, Node JS, and Microsoft SQL Server. The app was designed for CSV's from Sasktel to be uploaded and mapped to departments. Keeps track of the total's for each department.",
        sourceCodeExists: true,
        sourceCodeURL: 'https://github.com/j7oshua/sasktel-mobility-city-app',
        websitePublic: false,
        webURL: '',
        client: 'City of Prince Albert'
    },
    {
        id: 2,
        cName: 'project-5',
        name: 'AI Image Generation App',
        image: project5,
        description: "Built using the MERN stack, this AI Image Generation App allows the community to create and share images that are built using prompts.",
        sourceCodeExists: true,
        sourceCodeURL: 'https://github.com/j7oshua/AI-Image-Generation-App',
        websitePublic: false,
        webURL: '',
        client: 'Personal Project'
    },
    {
        id: 3,
        cName: 'project-2',
        name: 'E-Portfolio',
        image: project2,
        description: "My current E-Portfolio. Built on React, the website displays my recent projects and services.",
        sourceCodeExists: true,
        sourceCodeURL: 'https://github.com/j7oshua/eportfolio-v2',
        websitePublic: true,
        webURL: 'https://www.joshuagrimard.com',
        client: 'Personal Project'
    },
    {
        id: 4,
        cName: 'project-3',
        name: 'Restorative Action Program',
        image: project3,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Df sdf asdfas dfsd sdff sdf sdffss lskdw qoe poejasd ejfjs wejfjsd vkasdj",
        sourceCodeExists: false,
        sourceCodeURL: '',
        websitePublic: false,
        webURL: '',
        client: 'Restorative Action Program - Saskatoon'
    },
    {
        id: 5,
        cName: 'project-4',
        name: 'CI-RiskDB Application',
        image: project4,
        description: "Software that performs semi-quantitative risk evaluations for multiple types of critical infrastructure, including: Tailing Storage Facilities and Rock Storage Facilities.",
        sourceCodeExists: false,
        sourceCodeURL: '',
        websitePublic: true,
        webURL: 'https://www.envirointegration.com/software',
        client: 'Enviro Integration'
    }
]

export default projects;