'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function VisionClient() {
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
              <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our Vision
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The Arc of Human Progress: How AI Can Amplify Our Greatest Potential
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Arc of Human Progress</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Throughout history, humanity has followed an arc of progress—from the discovery of fire to the printing press, from the industrial revolution to the digital age. Each breakthrough has amplified our capabilities while freeing us to focus on what makes us uniquely human.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Artificial Intelligence represents the next great leap in this arc. When designed with human flourishing at its core, AI can handle routine tasks and complex computations, liberating us to pursue creativity, build meaningful relationships, and solve the most pressing challenges of our time.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">A Future of Amplified Humanity</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We envision a world where AI serves as a powerful tool for human empowerment—not replacement. A world where technology amplifies our creativity, enhances our decision-making, and enables us to tackle problems that have long seemed insurmountable.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Join the Arc of Progress</h3>
                  <p className="text-green-800 text-sm">
                    The future of human progress depends on our choices today. We invite you to help us ensure that AI development follows the arc of human flourishing—amplifying our potential while preserving what makes us uniquely human.
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
