import React from 'react';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management solution with real-time updates',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing creative work',
    technologies: ['React', 'Three.js', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

function Projects() {
  return (
    <div className="container px-6 py-24 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
        My Projects
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;