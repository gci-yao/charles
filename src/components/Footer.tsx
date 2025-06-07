import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo et description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">CY</div>
              <p className="text-gray-400 leading-relaxed">
                Développeur Full-Stack passionné par la création d'expériences 
                digitales exceptionnelles et l'innovation technologique.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <a href='https://github.com/gci-yao' target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  
                  <a href='https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364' target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>

                </a>
                <a
                  href="mailto:charlesyao1602@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Navigation rapide */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <div className="space-y-2">
                {[
                  { name: 'Accueil', id: 'accueil' },
                  { name: 'À propos', id: 'apropos' },
                  { name: 'Compétences', id: 'competences' },
                  { name: 'Projets', id: 'projets' },
                  { name: 'Contact', id: 'contact' }
                ].map(({ name, id }) => (
                  <button
                    key={id}
                    onClick={() => {
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact rapide */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>charlesyao1602@gmail.com</p>
                <p>+225 07 06 83 67 22</p>
                <p>Abidjan, Côte d'Ivoire</p>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <span>Retour en haut</span>
                <span>↑</span>
              </button>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center space-x-1">
                <span>© {currentYear} charlesyao.ci. Fait avec</span>
                <Heart className="text-red-500 fill-current" size={16} />
                <span>et beaucoup de café</span>
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;