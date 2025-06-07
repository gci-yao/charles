
import { Code2, Rocket, Users, Award } from 'lucide-react';
import photo from "../../dist/assets/jedi.png";

const About = () => {
  const stats = [
    { icon: Code2, number: '5+', label: 'Projets réalisés' },
    { icon: Users, number: '3+', label: 'Clients satisfaits' },
    { icon: Rocket, number: '2+', label: 'Ans d\'expérience' },
    { icon: Award, number: '10+', label: 'Technologies maîtrisées' }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo et info personnelle */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8  bg-gradient-to-br from-blue-4 to-purple-600 p-1">
                <div className="w-full h-full  bg-gray-300 flex items-center justify-center text-6xl text-gray-600">
                  <img src={photo} alt="" />
                  {/* 👨‍💻 */}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Développeur passionné
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Basé à Abidjan, Côte D'Ivoire
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionné par le développement web depuis plus de 2 ans, je me spécialise 
                dans la création d'applications modernes et performantes. Mon approche 
                combine créativité et rigueur technique pour livrer des solutions qui 
                dépassent les attentes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Je maîtrise l'ensemble de la stack de développement, du front-end avec 
                React et Vue.js au back-end avec Node.js et Python. Mon objectif est 
                toujours de créer des expériences utilisateur exceptionnelles tout en 
                maintenant un code propre et maintenable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Curieux et en veille technologique constante, j'aime relever de nouveaux 
                défis et collaborer avec des équipes dynamiques pour donner vie à des 
                projets ambitieux.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, number, label }, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;