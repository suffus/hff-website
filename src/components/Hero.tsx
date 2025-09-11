'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HFFLogo from './HFFLogo';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mission statement */}
            <div className="mb-8 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
              🌱 A Movement for Democratic AI
            </div>

            <div className="flex items-start justify-center gap-8">
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
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  AI for Human Flourishing
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-600">
                  We believe AI should amplify human potential, not replace it. Join us in building a future where technology serves humanity&apos;s highest aspirations and liberates us to focus on what makes us uniquely human.
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200"
              >
                Join Our Mission
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/vision"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200"
              >
                See Our Vision <span aria-hidden="true">→</span>
              </Link>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
