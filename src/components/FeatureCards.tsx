'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'AI-Powered Development',
    description: 'We advocate for AI coding tools that enhance human creativity and collaboration, making software development more accessible and empowering developers to build applications that connect people.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
        <path d="M8 8l2 2-2 2M16 8l-2 2 2 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path d="M6 20h12" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    href: '/coding',
  },
  {
    name: 'Creative Liberation',
    description: 'We believe AI should amplify human artistic expression, not replace it. Join us in exploring how AI can democratize creative tools and enhance human creativity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20" />
      </svg>
    ),
    href: '/creative',
  },
  {
    name: 'Universal Accessibility',
    description: 'We champion AI solutions that break down barriers and create inclusive technology. Help us build AI that empowers everyone, regardless of ability.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
    href: '/accessibility',
  },
  {
    name: 'Medical Advancement',
    description: 'We support AI in healthcare that augments medical professionals and improves patient outcomes. Join us in advocating for ethical medical AI that serves humanity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
      </svg>
    ),
    href: '/medical',
  },
];

export default function FeatureCards() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start justify-center gap-8">
            <div className="max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              >
                🌱 Our Vision for AI
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                Building AI That Serves Humanity
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 text-xl leading-8 text-gray-600"
              >
                We advocate for AI that amplifies human potential rather than replacing it. Join us in creating intelligent systems that handle routine tasks, freeing humans to focus on creativity, meaningful relationships, and pursuing their highest aspirations.
              </motion.p>
            </div>
            <div className="hidden lg:block mt-4">
              <Image
                src="/hff-tree.png"
                alt="Human Freedom Foundation Tree Logo"
                width={162}
                height={162}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={feature.href}
                  className="relative block overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl hover:ring-green-200/50 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-3xl shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-green-100 group-hover:text-green-600 transition-colors duration-200">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                      {feature.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Learn more & join us
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
