import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 80, color: 'from-blue-500 to-cyan-500' },
        // { name: 'Vue.js / Nuxt.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'JavaScript', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 50, color: 'from-teal-500 to-blue-500' },
        { name: 'Bootstrap 5', level: 92, color: 'from-teal-500 to-blue-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'Python / Django', level: 80, color: 'from-yellow-500 to-orange-500' },
        // { name: 'Java', level: 50, color: 'from-green-700 to-green-800' },
        { name: 'MySQL', level: 85, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 50, color: 'from-blue-700 to-indigo-700' }
      ]
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git / GitHub', level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'Docker', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'AWS / Vercel', level: 40, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD', level: 20, color: 'from-purple-600 to-purple-800' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mes Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise technique complète pour créer des solutions web modernes et performantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies supplémentaires */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technologies et outils familiers
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery',
                'PHP', 'Laravel', 'PostgreSQL', 'REST APIs',
                 'Vite', 'Figma', 'Adobe XD'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;