'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function AboutClient() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-6xl"
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
                  Our Mission
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Advocating for AI that amplifies human potential and invites everyone to help build this vision
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 max-w-2xl lg:max-w-none"
          >
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why We Exist</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Human Freedom Foundation advocates for artificial intelligence that serves humanity&apos;s highest aspirations. We believe AI should amplify human capabilities, not replace them, enabling people to focus on what makes us uniquely human: creativity, compassion, and meaningful relationships.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We envision a world where AI handles routine tasks and complex computations, freeing humans to pursue their passions, solve creative problems, and build deeper connections with one another. We invite everyone to help us build this future and ensure AI benefits are accessible to all.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
                <ul className="list-none space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✨</span>
                    <span className="text-gray-600"><strong>Human-Centered Design:</strong> Every AI solution we support prioritizes human well-being and empowerment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">🌍</span>
                    <span className="text-gray-600"><strong>Universal Access:</strong> We work to ensure AI benefits reach all communities, especially those traditionally underserved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">🤝</span>
                    <span className="text-gray-600"><strong>Collaboration:</strong> We believe in the power of human-AI collaboration to achieve greater outcomes than either could alone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">🔬</span>
                    <span className="text-gray-600"><strong>Ethical Innovation:</strong> All our initiatives are guided by principles of fairness, transparency, and respect for human dignity</span>
                  </li>
                </ul>

                <div className="bg-green-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Join Our Movement</h3>
                  <p className="text-green-800 text-sm">
                    We&apos;re building a community of advocates, developers, and visionaries who believe in human-centered AI. Whether you&apos;re a developer, designer, researcher, or simply someone who cares about the future of technology, we invite you to join us in creating AI artifacts that serve humanity&apos;s highest aspirations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
