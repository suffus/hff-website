'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function AccessibilityClient() {
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
                  Breaking Barriers with AI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Technology should empower everyone. Our accessibility initiatives harness AI to create inclusive solutions that enable full participation in the digital world.
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
              {/* Vision Assistance Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">👁️</div>
                  <h2 className="text-2xl font-bold text-gray-900">Vision Assistance Technologies</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI vision systems are transforming independence for the blind and visually impaired:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">AI guide dog systems using computer vision for navigation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Object recognition and scene description through smartphone cameras</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Text-to-speech conversion for printed materials and digital content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Smart home integration with voice-controlled environments</span>
                  </li>
                </ul>
              </motion.div>

              {/* Hearing Accessibility Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🤟</div>
                  <h2 className="text-2xl font-bold text-gray-900">Hearing Accessibility Solutions</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Breaking sound barriers with intelligent translation and communication tools:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Real-time sign language translation using computer vision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Live captioning for meetings, lectures, and conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Visual alert systems that convert audio cues to visual notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Lip reading assistance and speech pattern recognition</span>
                  </li>
                </ul>
              </motion.div>

              {/* Autonomous Transportation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🚗</div>
                  <h2 className="text-2xl font-bold text-gray-900">Autonomous Transportation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Self-driving vehicles represent freedom for those unable to operate traditional cars, providing safe, reliable transportation that adapts to individual needs and preferences.
                </p>
              </motion.div>

              {/* Cognitive and Learning Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🧠</div>
                  <h2 className="text-2xl font-bold text-gray-900">Cognitive and Learning Support</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI assistants help individuals with cognitive differences navigate daily tasks, remember important information, and learn at their own pace with personalized support systems.
                </p>
              </motion.div>

              {/* Mobility and Motor Function */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">💪</div>
                  <h2 className="text-2xl font-bold text-gray-900">Mobility and Motor Function</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From brain-computer interfaces controlling prosthetics to AI-powered wheelchairs that navigate complex environments, technology is restoring mobility and independence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

