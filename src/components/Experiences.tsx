import Title from "./Title"

import imgDJANGO from "../assets/techno/django.jpeg";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgFLUTTER from "../assets/techno/flutter.jpeg";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPYTHON from "../assets/techno/python.jpeg";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

// Logo ESATIC unique pour tout le parcours
import esatic from "../assets/companies/esatic.png";


const skills = [
    { id: 1, name: "django", image: imgDJANGO },
    { id: 2, name: "flutter", image: imgFLUTTER },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "python", image: imgPYTHON },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const experiences = [
    {
        id: 1,
        role: "Développeur IoT",
        company: "Air Smart",
        period: "Sept 2025 - Jan 2026",
        description: [
            "Programmation de capteurs Arduino (qualité de l'air, humidité) et transmission Bluetooth/MQTT.",
            "Collaboration étroite avec l'équipe IA pour l'intégration des données capteurs vers le Cloud.",
        ],
        image: esatic,
    },
    {
        id: 2,
        role: "Développeur Flutter & IoT",
        company: "AgriScan",
        period: "Nov 2025 - Jan 2026",
        description: [
            "Développement de l'application mobile Flutter et intégration de capteurs de sol (pH, humidité).",
            "Mise en place de modèles prédictifs pour l'irrigation et contribution au diagnostic IA par image.",
        ],
        image: esatic,
    },
    {
        id: 3,
        role: "Développeur Fullstack",
        company: "ExpenseFlow",
        period: "Fév 2025 - Juil 2025",
        description: [
            "Développement de l'interface React.js connectée à une API REST via Django REST Framework.",
            "Conception complète de la logique CRUD et de la gestion de la base de données des dépenses.",
        ],
        image: esatic,
    },
];

const Experiences = () => {
  
  return (
    // J'ai ajouté -mt-10 pour remonter et mb-20 pour l'espace avec la suite
    <div id="Experiences" className="-mt-10 mb-20">
      <Title title="Experiences"/>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
            {skills.map((skill) =>(
                <div key={skill.id} className="flex justify-center items-center flex-col">
                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                        <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                    </div>
                    <span className="mt-2 text-sm">{skill.name}</span>
                </div>
            ))
            }
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
            {experiences.map((experience) => (
                <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                    <div className="flex items-center">
                        <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                        <div className="ml-4" >
                            <h1 className="text-xl text-accent font-bold">
                                {experience.role} , {experience.company}
                            </h1>
                            <span className="text-sm">{experience.period}</span>
                        </div>
                    </div>
                    <ul className="list-disc ml-16 mt-2">
                        {experience.description.map((desc , index) => (
                            <li key={index}>
                                {desc}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences