'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Email', url: 'mailto:moiz@example.com', icon: '📧' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Let&apos;s <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Connect
            </motion.span>
          </motion.h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="text-2xl relative z-10"
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    delay: index * 0.2,
                  }}
                >
                  {link.icon}
                </motion.span>
                <span className="font-medium relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="glass-strong rounded-2xl p-12 max-w-2xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
            
            <h3 className="text-3xl font-bold mb-8">
              Send me a <span className="gradient-text">message</span>
            </h3>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-black/70 transition-all"
                  whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-black/70 transition-all"
                  whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-black/70 transition-all resize-none"
                  whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <motion.span 
                  className="relative z-10 flex items-center justify-center gap-2"
                >
                  Send Message
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-32 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>© 2026 Moiz Ahmed. All rights reserved.</p>
      </motion.footer>
    </section>
  );
}
