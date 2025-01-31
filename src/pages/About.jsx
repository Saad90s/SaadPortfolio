import SkillCard from '../components/about/SkillCard.jsx';
import Formation from '../components/about/Formation.jsx';

const skills = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'backend' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
  { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
  { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'design' },
  { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' }
];



export default function About() {
  return (
    <div className="container px-6 py-24 mx-auto animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
          About Me
        </h1>


        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          Développeur full stack passionné, spécialisé dans la création d'applications web modernes et performantes. Motivé par l'apprentissage continu et la résolution de problèmes, je combine créativité et compétences techniques pour offrir des solutions efficaces.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="relative mb-8 text-3xl font-bold text-slate-800">
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text">
              Skills
            </span>
            <div className="absolute left-0 w-12 h-1 rounded-full -bottom-2 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <Formation />
      </div>
    </div>
  );
}
