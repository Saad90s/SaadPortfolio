import React from 'react';

const Formations = [
  {
    company: 'LYCEE IBN KHATIB',
    position: 'BAC SCIENCES PHYSIQUES',
    period: '2020 - 2023',
    description: 'Formation académique axée sur les sciences physiques, avec un focus sur les mathématiques, la chimie et la physique. Développement de compétences analytiques et résolution de problèmes.',
    skills: ['Mathématiques', 'Physique', 'Chimie', 'Travail d’équipe', 'Organisation']
  },
  {
    company: 'ISTA NTIC HAY RIYAD',
    position: 'Full Stack Developer',
    period: '2023 - 2025',
    description: 'Formation professionnelle en développement web et mobile, couvrant les technologies back-end et front-end. Acquisition des compétences nécessaires pour concevoir, développer et déployer des applications robustes.',
    skills: ['JavaScript', 'Python', 'Docker', 'MongoDB', 'React', 'Laravel', 'Node.js', 'API Rest']
  }
];


function Formation(){
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="relative mb-8 text-3xl font-bold text-slate-800">
          <span className="text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text">
          Formation
          </span>
          <div className="absolute left-0 w-20 h-1 rounded-full -bottom-2 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
        </h2>

        <div className="space-y-12">
          {Formations.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-4 h-4 transition-transform duration-300 transform -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:scale-125">
                <div className="absolute inset-0 w-4 h-4 rounded-full opacity-75 bg-gradient-to-r from-indigo-500 to-cyan-500 animate-ping"></div>
              </div>

              {/* Timeline line */}
              <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-cyan-500/50 transform -translate-x-1/2"></div>

              {/* Content */}
              <div className="p-6 transition-shadow duration-300 bg-white border shadow-lg rounded-xl hover:shadow-xl border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold transition-colors duration-300 text-slate-800 group-hover:text-indigo-600">
                    {exp.position}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium rounded-full text-slate-500 bg-slate-100">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-2 text-lg font-semibold text-cyan-600">
                  {exp.company}
                </p>

                <p className="mb-4 leading-relaxed text-slate-600">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm font-medium text-indigo-600 transition-colors duration-300 rounded-full bg-indigo-50 hover:bg-indigo-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formation;