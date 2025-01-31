import React from 'react';

export default function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-white shadow-md group rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50">
      {/* Skill Icon */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-sm opacity-20 group-hover:opacity-40"></div>
        <img
          src={skill.image}
          alt={skill.name}
          className="relative object-cover w-20 h-20 transition-all duration-300 border-4 border-white rounded-full shadow-md group-hover:border-indigo-200"
        />
      </div>

      {/* Skill Name */}
      <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
        {skill.name}
      </h3>

      {/* Skill Category */}
      <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
        {skill.category}
      </p>
    </div>
  );
}