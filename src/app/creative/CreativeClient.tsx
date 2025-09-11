'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function CreativeClient() {
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
              <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Unleashing Creative Potential
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Creativity is fundamentally human, but AI can amplify our artistic vision and make creative tools accessible to everyone, regardless of technical skill or resources.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-16">
              {/* Visual Arts Revolution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🎨</div>
                  <h2 className="text-2xl font-bold text-gray-900">Visual Arts Revolution</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI democratizes visual creation, enabling anyone to produce stunning artwork, illustrations, and designs:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Text-to-image generation for concept visualization and artistic exploration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Style transfer tools that blend artistic techniques with personal vision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Photo enhancement and manipulation with professional-grade results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">3D modeling and animation assistance for immersive experiences</span>
                  </li>
                </ul>
              </motion.div>

              {/* Literary and Writing Enhancement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">📚</div>
                  <h2 className="text-2xl font-bold text-gray-900">Literary and Writing Enhancement</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI writing tools serve as intelligent collaborators in the creative process:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Brainstorming partners for plot development and character creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Grammar and style enhancement while preserving unique voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Translation services that maintain poetic nuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Research assistance for historically accurate or scientifically sound fiction</span>
                  </li>
                </ul>
              </motion.div>

              {/* Musical Composition and Audio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🎵</div>
                  <h2 className="text-2xl font-bold text-gray-900">Musical Composition and Audio</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From melody generation to full orchestration, AI opens new frontiers in musical creativity, making composition tools available to musicians at every level.
                </p>
              </motion.div>

              {/* Video and Multimedia Production */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🎬</div>
                  <h2 className="text-2xl font-bold text-gray-900">Video and Multimedia Production</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI streamlines video editing, enables automated subtitle generation, and assists in creating engaging multimedia content that connects people across cultures and languages.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
