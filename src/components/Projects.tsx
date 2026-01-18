import Title from "./Title"

import imgTodo from '../assets/projects/todo.png'; 
import imgPortfolio from '../assets/projects/portfolio.png';
import imgHealth from '../assets/projects/halthTrack.png'; 
import imgAgri from '../assets/projects/agriscan.png';
import imgAir from '../assets/projects/AirSmart.png';
import imgExpense from '../assets/projects/ExpenseFlow.png';

import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Todo App',
        description: 'Une application de gestion de tâches performante permettant d’organiser son quotidien avec une interface fluide et intuitive.',
        technologies: ['ReactJS', 'TypeScript', 'TailwindCSS'],
        demoLink: '#',
        repoLink: 'https://github.com/JeanJaures-Alkashi75/todo-app-react',
        image: imgTodo,
    },
    {
        id: 2,
        title: 'Portfolio Personnel',
        description: 'Mon site vitrine interactif présentant mon parcours, mes compétences techniques et l’ensemble de mes réalisations.',
        technologies: ['ReactJS', 'TypeScript', 'TailwindCSS'],
        demoLink: '#',
        repoLink: 'https://github.com/JeanJaures-Alkashi75/mon-portfolio',
        image: imgPortfolio,
    },
    {
        id: 3,
        title: 'HealthTrack',
        description: 'Application innovante pour gérer les informations de santé humaines et animales, éliminant le besoin de carnets de santé physiques.',
        technologies: ['ReactJS', 'TypeScript', 'TailwindCSS'],
        demoLink: '#',
        repoLink: 'https://github.com/JeanJaures-Alkashi75/health-track',
        image: imgHealth,
    },
    {
        id: 4,
        title: 'AgriScan',
        description: 'Système intelligent de prédiction des maladies des champs et de suivi agricole basé sur l’analyse de données.',
        technologies: ['Flutter', 'Django', 'TailwindCSS'],
        demoLink: '#',
        repoLink: '#', 
        image: imgAgri,
    },
    {
        id: 5,
        title: 'AirSmart',
        description: 'Système intelligent de détection et de prédiction des risques respiratoires pour améliorer la santé environnementale.',
        technologies: ['Python', 'Flutter', 'Django'],
        demoLink: '#',
        repoLink: '#',
        image: imgAir,
    },
    {
        id: 6,
        title: 'ExpenseFlow',
        description: 'Une application complète de suivi de dépenses pour une gestion rigoureuse et simplifiée de ses finances personnelles.',
        technologies: ['Fullstack', 'Finance', 'Web'],
        demoLink: '#',
        repoLink: '#',
        image: imgExpense,
    },
];

const Projects = () => {

    const handleDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Les vidéos de démonstrations ne sont pas encore disponibles.");
    };

    const handleGithubClick = (e: React.MouseEvent, repoLink: string) => {
        if (repoLink === '#') {
            e.preventDefault();
            alert("Le code source sera très bientôt disponible.");
        }
    };

    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a 
                                className="btn btn-accent w-2/3" 
                                href={project.demoLink}
                                onClick={handleDemoClick}
                            >
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a 
                                className="btn btn-neutral w-1/3 ml-2" 
                                href={project.repoLink}
                                target={project.repoLink !== '#' ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                onClick={(e) => handleGithubClick(e, project.repoLink)}
                            >
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects