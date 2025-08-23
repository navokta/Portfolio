import React from 'react'
import Image from 'next/image';

const Project = () => {
  return (
    <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              My <span className="text-pink-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <div
                  key={project}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:translate-y-2 transition-all duration-500 group"
                >
                  <div className="h-52 bg-gray-700 relative">
                    <Image
                      src={`/project-${project}.jpg`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      Project {project}
                    </h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      A modern web app built with React, Next.js, and Tailwind. Features responsive design, dark mode, and optimized performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Tailwind', 'TypeScript'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Project
