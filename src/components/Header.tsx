import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import pdf from "../assets/charlesyao.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


const handleDownload = async () => {
  try {
    const response = await fetch('/charlesyao.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Charles_Yao_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Erreur de téléchargement:', error);
  }
};

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
        
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {['accueil', 'apropos', 'competences', 'projets', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item === 'apropos' ? 'À propos' : item === 'competences' ? 'Compétences' : item}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
              <Download size={16} />
              <span>CV</span>
            </button>
          </div>

          {/* Menu Mobile */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="py-4 px-6 space-y-4">
              {['accueil', 'apropos', 'competences', 'projets', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors capitalize"
                >
                  {item === 'apropos' ? 'À propos' : item === 'competences' ? 'Compétences' : item}
                </button>
              ))}
            <button
  onClick={handleDownload}
  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
>
  <Download size={16} />
  <span>Télécharger CV</span>
</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;