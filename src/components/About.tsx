'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React & React Native', level: 92 },
  { name: 'TypeScript', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'OAuth & Keycloak', level: 82 },
  { name: 'Mobile Development', level: 85 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center"
            variants={itemVariants}
          >
            About <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Me
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
            >
              <motion.p 
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I&apos;m a passionate Full Stack Developer with extensive experience building scalable web and mobile applications. 
                I&apos;ve contributed to major platforms like Deriv.com and worked on diverse projects spanning FinTech, healthcare, and enterprise solutions.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My expertise includes React, React Native, TypeScript, and modern web technologies. I specialize in creating 
                secure, performant applications with seamless user experiences across web and mobile platforms.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From implementing OAuth with Keycloak to building real-time trading interfaces, I bring a comprehensive 
                skill set to every project. I&apos;m passionate about writing clean code and delivering exceptional products.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <motion.span 
                      className="text-gray-300 font-medium"
                      whileHover={{ x: 5, color: '#a855f7' }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span 
                      className="text-gray-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 relative"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 + index * 0.1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
