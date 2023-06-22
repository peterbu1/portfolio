import React from 'react';
import { motion } from 'framer-motion'
import biocat from '../assets/biocat.png'


interface Project {
  id: number;
  name: string;
  photo: string;
  description: string;
  technologies: string[];
  links: {
    website?: string;
    github?: string;
    powerpoint?: string;
    pdf?: string;
  };
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-auto'>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/*  w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory */}
        {/* grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 */}
        {projects.map((project) => (
          <div key={project.id} className="bg-[#292929] flex flex-col flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] snap-center p-4 shadow-md rounded-md transition-transform hover:scale-105"> 
          {/* bg-[#292929] p-4 shadow-md rounded-md transition-transform hover:scale-105 */}
          {/* bg-[#292929] flex flex-col flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] xl:h-[500px] snap-center p-4 shadow-md rounded-md transition-transform hover:scale-105 */}
            <img src={project.photo} alt={project.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-bold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <h4 className="text-sm font-medium mb-2">Technologies used:</h4>
            <ul className="mb-4">
              {project.technologies.map((tech) => (
                <li key={tech} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm mr-2 mb-2">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex space-x-2">
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
                  Visit Website
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md text-sm">
                  GitHub
                </a>
              )}
              {project.links.powerpoint && (
                <a href={project.links.powerpoint} download className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md text-sm">
                  Presentation
                </a>
              )}
              {project.links.pdf && (
                <a href={project.links.pdf} download className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-md text-sm">
                  The Book
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Usage example
const ExampleComponent: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'BioCat: Catalogue Management System',
      photo: './biocat.png',
      description: 'BioCat is a web-based Catalogue Management System designed for the Biology Department at Temple University. It enables staff and lab instructors to efficiently access, manage, track, and request microscope slides. With BioCat, users can easily navigate a comprehensive catalog, ensuring quick retrieval of specimens for educational and research purposes. The system offers advanced features for inventory management, slide tracking, and request handling, optimizing slide management processes. BioCat promotes seamless collaboration, accurate record-keeping, and efficient utilization of microscope slides within the department.',
      technologies: ['C#', 'ASP.NET', 'Entity Framework', 'MVC', 'scss'],
      links: {
        powerpoint: './biocat.pptx',
        pdf: './biocat.pdf',
      },
    },
    {
      id: 2,
      name: 'Pokémon Visualization Project',
      photo: '/pokemon.png',
      description: 'The Pokémon Visualization Project is an interactive web application that utilizes HTML, JavaScript, and d3.js to provide a visually captivating exploration of Pokémon data. With interactive charts, graphs, and network diagrams, users can analyze Pokémon types, abilities, and evolution chains, uncovering patterns and connections. It offers an immersive experience for both Pokémon enthusiasts and data analysis enthusiasts, showcasing the power of data visualization in understanding the Pokémon universe.',
      technologies: ['HTML', 'Javascript', 'd3.js'],
      links: {
        website: 'https://peterbu1.github.io/PokemonVisualization/',
        github: 'https://github.com/peterbu1/PokemonVisualization',
        powerpoint: './pokemon.pptx'
      }
    },
    {
      id: 3,
      name: 'ToDo App',
      photo: '/todo.png',
      description: 'The ToDo App is a secure task management application with Multi-Factor Authentication (MFA) for user access. It enables users to create to-do lists, manage tasks, and seamlessly integrate with their calendars to schedule and add events. This comprehensive app ensures efficient task management and effective time planning for both personal and professional use.',
      technologies: ['HTML', 'Javascript', 'Bootstrap', 'php', 'mysql',],
      links: {
        website: 'https://cis-linux2.temple.edu/~tuj87538/3342/ToDoList/index.html',
        github: 'https://github.com/peterbu1/ToDoList',
      }
    },
    {
      id: 4,
      name: 'Car Collectors Bubble',
      photo: '/carcollector.png',
      description: 'Car Collectors Bubble is an exciting web application and my inaugural venture into client-side scripting. This project aims to provide a vibrant platform for car enthusiasts to showcase their car builds and engage in lively discussions with fellow enthusiasts. Alongside the interactive community features, the application incorporates a dedicated blog where I chronicle my journey and share insights gained during the development process. Car Collectors Bubble creates a dynamic space for car aficionados to connect, inspire, and celebrate their shared passion for automotive craftsmanship.',
      technologies: ['HTML', 'Javascript', 'Bootstrap', 'mysql'],
      links: {
        website: 'http://cis-linux2.temple.edu:8080/SP22_3344_tuj87538//index.html#/home',
        github: 'https://github.com/peterbu1/CollectorsBubble',
      }
    },
    {
      id: 5,
      name: 'The Price is Right Replica',
      photo: '/thepriceisright.png',
      description: '"The Price is Right Replica" is a C# Windows Forms application that showcases my proficiency in software development. This project demonstrates my ability to create an engaging and interactive replica of the renowned game show. By meticulously recreating the game mechanics and incorporating captivating visuals, I successfully captured the essence of the original show. This application highlights my skills in C# programming, user interface design, and attention to detail. It stands as a testament to my passion for developing enjoyable and immersive software experiences.',
      technologies: ['C#', 'Windows Form', 'Microsoft Access'],
      links: {
        github: 'https://github.com/peterbu1/ThePriceisRIght',
      }
    },
    // Add more projects as needed
  ];

  return (
    <div
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h1 className="absolute top-0 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">My Projects</h1>
      <Projects projects={projects} />
    </div>
  );
};

export default ExampleComponent;
