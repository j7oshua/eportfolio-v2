import project1 from '../assets/images/project-1.jpeg';
import project2 from '../assets/images/project-2.jpeg';
import project3 from '../assets/images/project-3.jpeg';
import project4 from '../assets/images/project-4.jpeg';

const projects = [
    {
        id: 1,
        cName: 'project-1',
        name: 'Sasktel Invoice Management',
        image: project1,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Df sdf asdfas dfsd sdff sdf sdffss lskdw qoe poejasd ejfjs wejfjsd vkasdj",
        sourceCodeExists: true,
        sourceCodeURL: 'https://github.com/j7oshua/sasktel-mobility-city-app',
        websitePublic: false,
        webURL: '',
        client: 'City of Prince Albert'
    },
    {
        id: 2,
        cName: 'project-2',
        name: 'E-Portfolio',
        image: project2,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Df sdf asdfas dfsd sdff sdf sdffss lskdw qoe poejasd ejfjs wejfjsd vkasdj",
        sourceCodeExists: false,
        sourceCodeURL: '',
        websitePublic: true,
        webURL: 'https://www.joshuagrimard.com',
        client: 'Personal Project'
    },
    {
        id: 3,
        cName: 'project-3',
        name: 'Restorative Action Program',
        image: project3,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Df sdf asdfas dfsd sdff sdf sdffss lskdw qoe poejasd ejfjs wejfjsd vkasdj",
        sourceCodeExists: false,
        sourceCodeURL: '',
        websitePublic: false,
        webURL: '',
        client: 'Restorative Action Program'
    },
    {
        id: 4,
        cName: 'project-4',
        name: 'CI-SKOR Risk Application',
        image: project4,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Df sdf asdfas dfsd sdff sdf sdffss lskdw qoe poejasd ejfjs wejfjsd vkasdj",
        sourceCodeExists: false,
        sourceCodeURL: '',
        websitePublic: false,
        webURL: '',
        client: 'Mining'
    }
]

export default projects;