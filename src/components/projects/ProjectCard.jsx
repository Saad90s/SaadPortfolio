import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg group dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 dark:border-gray-700">
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full transition-transform duration-300 transform h-60 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-center p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-lg bg-black/50 hover:bg-black/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-lg bg-black/50 hover:bg-black/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          {project.title}
        </h3>

        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium text-blue-700 transition-colors duration-200 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}