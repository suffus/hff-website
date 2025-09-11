'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function CodingClient() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-6xl mb-16"
          >
            <div className="flex items-start justify-center gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  AI-Powered Development Revolution
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Computer code is the language of creating software, and AI is transforming how we speak it. Our coding initiatives focus on democratizing software development and enhancing human-to-human connection through technology.
                </p>
              </div>
              <div className="hidden lg:block mt-4">
                <Image
                  src="/hff-tree.png"
                  alt="Human Freedom Foundation Tree Logo"
                  width={190}
                  height={190}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-16">
              {/* Enhanced Developer Productivity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🚀</div>
                  <h2 className="text-2xl font-bold text-gray-900">Enhanced Developer Productivity</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI coding platforms such as Claude Code and Cursor can increase developer productivity by up to 500%, not only handling routine tasks like boilerplate generation, debugging assistance, and code optimization, but also generating large parts of entire applications from scratch. This frees developers to focus on architecture, user experience, and solving complex problems.
                </p>
              </motion.div>

              {/* Communication & Collaboration Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🤝</div>
                  <h2 className="text-2xl font-bold text-gray-900">Communication & Collaboration Tools</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We&apos;re pioneering AI-assisted development of applications that enhance human communication:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Real-time collaboration platforms with intelligent conflict resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Communication apps that break language barriers instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Project management tools that understand context and predict needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Code review systems that ensure quality while teaching best practices</span>
                  </li>
                </ul>
              </motion.div>

              {/* Democratizing Programming Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🎓</div>
                  <h2 className="text-2xl font-bold text-gray-900">Democratizing Programming Education</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI tutors provide personalized coding instruction, adapting to individual learning styles and pace. Whether you&apos;re a complete beginner or experienced developer learning new technologies, AI makes programming education accessible to everyone.
                </p>
              </motion.div>

              {/* Intelligent Code Generation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🔧</div>
                  <h2 className="text-2xl font-bold text-gray-900">Intelligent Code Generation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From natural language descriptions to functional applications, AI coding tools are revolutionizing how we think about software creation. Complex algorithms, user interfaces, and entire application frameworks can now be generated and refined through conversational interaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
