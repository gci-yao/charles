import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Target } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Développeur Full-Stack et apprenti pentester';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
         <h4 className="text-5xl   text-white mb-6 leading-tight">Hello !! , je suis</h4> 
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            
            <span className="block text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Charles yao
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-blue-200 mb-8 h-12 flex items-center justify-center">
            <span className="font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionné par la création d'expériences digitales exceptionnelles. 
            Je transforme vos idées en solutions web modernes et performantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Voir mes projets
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Me contacter
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/gci-yao', label: 'GitHub' , Target},
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nguessan-guy-charles-junior-yao-9aba39364', label: 'LinkedIn',Target },
              { icon: Mail, href: 'mailto:charlesyao1602@gmail.com', label: 'Email',Target }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-yellow-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;