import React from 'react'

const Skills = () => {
  return (
      <div className="container mx-auto max-w-5xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
      My <span className="text-pink-400">Expertise</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Frontend */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Frontend
        </h3>
        <div className="flex flex-wrap gap-3">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-purple-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-pink-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          Backend
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-pink-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Design */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-blue-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tools & Design
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Git', 'VS Code', 'Figma', 'Adobe XD', 'Postman', 'Vercel', 'Netlify'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Optional: Add a soft closing line */}
    <p className="text-center text-gray-400 mt-16 text-lg">
      Always learning. Always building.
    </p>
  </div>
  )
}

export default Skills
