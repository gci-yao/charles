import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import bafa from "../../dist/assets/bafa.png";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      image: bafa,
      technologies: ['React', 'Node.js', 'Django', 'Paydunya'],
      category: 'web',
      githubUrl: 'https://github.com/gci-yao',
      liveUrl: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364'
    },
    {
      id: 2,
      title: 'Gestion de parc informatique',
      description: 'Interface d\'administration avec graphiques interactifs et analyses en temps réel.',
      // image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'Javascript', 'MySQL', 'JQuery', 'Bootstrap'],
      category: 'web',
      githubUrl: 'https://github.com/gci-yao',
      liveUrl: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      description: 'Application mobile de gestion de Garba.',
      // image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'MySQL', 'Figma'],
      category: 'mobile',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Agency (En cours ...)',
      description: 'Site vitrine pour agence créative avec animations et parallax.',
      // image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Framer Motion', 'Figma'],
      category: 'design',
      githubUrl: 'https://github.com/gci-yao',
      liveUrl: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364'
    },
    {
      id: 5,
      title: 'API REST Service (En cours ...)',
      description: 'Service API complet avec authentification et documentation Swagger.',
      // image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      category: 'backend',
      githubUrl: 'https://github.com/gci-yao',
      liveUrl: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364'
    },
    {
      id: 6,
      title: 'Crypto Tracker (En cours ...)',
      description: 'Application de suivi des cryptomonnaies avec alertes en temps réel.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'WebSocket', 'TailwindCSS', 'CoinGecko API'],
      category: 'web',
      githubUrl: 'https://github.com/gci-yao',
      liveUrl: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mes Projets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez une sélection de mes réalisations récentes
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Voir plus de projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;