'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function MedicalClient() {
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
                  Revolutionizing Healthcare
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  AI in medicine represents one of humanity&apos;s greatest opportunities to reduce suffering and extend healthy life. We support development of AI systems that enhance medical professionals&apos; capabilities.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-16">
              {/* Enhanced Diagnostic Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🔬</div>
                  <h2 className="text-2xl font-bold text-gray-900">Enhanced Diagnostic Capabilities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI diagnostic tools are achieving unprecedented accuracy in disease detection:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Medical imaging analysis that spots early signs of cancer, heart disease, and neurological conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Pattern recognition in lab results that identifies rare diseases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Symptom analysis that suggests potential diagnoses for complex cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Drug interaction and allergy prediction systems</span>
                  </li>
                </ul>
              </motion.div>

              {/* Early Detection and Prevention */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">⚡</div>
                  <h2 className="text-2xl font-bold text-gray-900">Early Detection and Prevention</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Predictive AI systems monitor health indicators to catch diseases before symptoms appear:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Wearable devices that detect cardiac anomalies and alert emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Skin cancer detection through smartphone cameras</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Mental health monitoring through speech pattern and behavior analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Genetic risk assessment for personalized prevention strategies</span>
                  </li>
                </ul>
              </motion.div>

              {/* Robotic Surgery Assistance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🤖</div>
                  <h2 className="text-2xl font-bold text-gray-900">Robotic Surgery Assistance</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI-guided surgical robots enable:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Microsurgery with superhuman precision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Minimally invasive procedures that reduce recovery time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Remote surgery capabilities for underserved areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span className="text-gray-600">Real-time surgical guidance and complication prevention</span>
                  </li>
                </ul>
              </motion.div>

              {/* Clinical Decision Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">📊</div>
                  <h2 className="text-2xl font-bold text-gray-900">Clinical Decision Support</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI systems help healthcare providers make informed decisions by analyzing vast amounts of medical literature, patient history, and current symptoms to suggest optimal treatment approaches.
                </p>
              </motion.div>

              {/* Drug Discovery and Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">💊</div>
                  <h2 className="text-2xl font-bold text-gray-900">Drug Discovery and Development</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  AI accelerates pharmaceutical research, identifying promising compounds, predicting drug efficacy, and significantly reducing the time and cost of bringing new treatments to market.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
