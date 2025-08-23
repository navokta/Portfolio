import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              About <span className="text-pink-400">Me</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <Image
                  src="/sakshi-about.jpg"
                  alt="Coder"
                  width={320}
                  height={320}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Who am I?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with a love for clean code and stunning UI/UX. I specialize in building modern, responsive websites using the latest web technologies.
                </p>
                <p className="text-gray-400">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source, or mentoring aspiring developers.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    ['Name', 'Coder'],
                    ['Email', 'Coder@example.com'],
                    ['From', 'Mumbai, India'],
                    ['Experience', '3+ Years'],
                    ['Specialty', 'React & Next.js'],
                    ['Availability', 'Open to Work'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <h4 className="font-medium text-pink-300">{label}:</h4>
                      <p className="text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  )
}

export default About
