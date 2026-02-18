'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Deriv.com',
    description: 'Contributed to Deriv.com, a leading online trading platform serving millions of users worldwide with advanced trading tools and features.',
    tags: ['React', 'TypeScript', 'Trading Platform', 'FinTech'],
    link: 'https://deriv.com',
  },
  {
    title: 'Deriv App',
    description: 'Developed features for the Deriv mobile and web application, providing seamless trading experiences across multiple platforms.',
    tags: ['React Native', 'Mobile', 'WebSockets', 'Real-time'],
    link: 'https://app.deriv.com',
  },
  {
    title: 'Qiwa Kiosk',
    description: 'Developed self-service kiosk application for Qiwa, Saudi Arabia\'s labor market platform, streamlining government services and HR processes.',
    tags: ['React', 'Kiosk', 'Gov-Tech', 'UI/UX'],
    link: '#',
  },
  {
    title: 'DomainAI',
    description: 'Built AI-powered domain search and recommendation platform, helping users find perfect domain names using machine learning algorithms.',
    tags: ['Next.js', 'AI/ML', 'TypeScript', 'API Integration'],
    link: '#',
  },
  {
    title: 'RxStrategies',
    description: 'Built enterprise solutions for healthcare technology, focusing on pharmacy management and medication optimization systems.',
    tags: ['React', 'Node.js', 'Healthcare', 'Enterprise'],
    link: '#',
  },
  {
    title: 'Keycloak Integration',
    description: 'Implemented secure authentication and authorization systems using Keycloak for enterprise-grade identity management.',
    tags: ['Keycloak', 'OAuth', 'Security', 'SSO'],
    link: '#',
  },
  {
    title: 'Liquid Mobile',
    description: 'Developed mobile application features and interfaces for Liquid, delivering smooth and intuitive user experiences.',
    tags: ['React Native', 'Mobile App', 'UI/UX', 'iOS/Android'],
    link: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            Featured <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                rotate: [0, 2, -2, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Projects
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateZ: index % 2 === 0 ? 1 : -1,
                }}
                style={{ perspective: 1000 }}
              >
                {/* Gradient border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
                    filter: 'blur(20px)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group font-medium"
                  >
                    View Project
                    <motion.svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
