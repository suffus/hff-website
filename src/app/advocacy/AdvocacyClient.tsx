'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AdvocacyClient() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-start justify-center gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                AI and the Arc of Human Progress
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                The Next Great Liberation
              </p>
              <div className="mt-6 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                🌱 A Foundation Perspective
              </div>
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

        {/* Article content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
        >
          <p className="text-xl leading-8 text-gray-600 font-medium mb-8">
            Throughout history, humanity has repeatedly transcended its limitations through transformative technologies that fundamentally altered how we live, work, and relate to the world around us. From the first knapped flint tools to the vast networks of the internet, each breakthrough has expanded human capability and liberated us from constraints that once seemed insurmountable. Today, we stand at the threshold of perhaps the most profound technological revolution yet: artificial intelligence. Like the great innovations before it, AI promises not merely incremental improvement, but a fundamental expansion of human potential.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Pattern of Human Liberation</h2>
          
          <p>
            The story of human progress is written in the tools we create. When our ancestors first chipped stone into sharp edges 2.6 million years ago, they didn&apos;t simply make better rocks—they extended the reach of human intention beyond the limitations of flesh and bone. The hand axe was humanity&apos;s first amplifier, multiplying our strength and precision in ways that transformed hunting, food preparation, and eventually, our capacity for complex thought itself.
          </p>

          <p>
            The mastery of bronze around 3500 BCE marked another quantum leap. For the first time, humans could reshape the very atoms of metal, creating tools stronger and more durable than anything nature provided. Bronze plowshares revolutionized agriculture, supporting larger populations and freeing some individuals to pursue specialization in crafts, governance, and knowledge. Iron, discovered around 1500 BCE, democratized this power further—cheaper and more abundant than bronze, iron tools and weapons reshaped civilizations across the globe.
          </p>

          <p>
            The Romans understood that true power lay not just in superior tools, but in superior systems. Their roads and bridges created networks that moved not just armies and goods, but ideas and innovations across vast distances. These engineering marvels collapsed geographic barriers and created the infrastructure for an interconnected world. Similarly, their aqueducts and urban planning systems freed millions from the daily struggle for clean water and basic sanitation, enabling unprecedented urban civilization.
          </p>

          <p>
            The Industrial Revolution unleashed the power of steam and mechanization, liberating humanity from dependence on muscle power and the rhythms of animal energy. Steam engines didn&apos;t just move trains—they powered textile mills that clothed nations, factories that mass-produced goods once available only to elites, and ships that connected continents. The assembly line and mass production techniques that followed transformed scarcity into abundance for millions, creating the material foundation for modern democracy and universal education.
          </p>

          <p>
            In our own lifetime, the internet has achieved what no previous technology could: the near-instantaneous connection of human minds across any distance. The web has democratized access to information, enabled global collaboration on an unprecedented scale, and created new forms of economic opportunity that transcend traditional geographic and social barriers. It has fundamentally altered how we learn, create, and relate to one another.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">AI: The Liberation of Mind</h2>
          
          <p>
            Now, artificial intelligence emerges as the latest chapter in this grand narrative of human augmentation. But AI represents something qualitatively different from all previous technologies. While earlier innovations extended our physical capabilities or connected us across space, AI extends our cognitive capabilities—our capacity to reason, analyze, create, and solve problems.
          </p>

          <p>
            For the first time in human history, we are creating tools that can engage in the fundamental activities of mind: pattern recognition, language understanding, logical reasoning, and creative synthesis. AI doesn&apos;t just process information faster than humans—it can identify patterns we miss, generate insights we might never reach, and explore solution spaces too vast for individual minds to navigate.
          </p>

          <p>
            This cognitive amplification promises liberation from mental drudgery just as earlier technologies freed us from physical toil. The routine intellectual work that consumes countless human hours—data analysis, document review, basic research, code debugging, administrative coordination—can increasingly be handled by AI systems, freeing human intelligence for higher-order creative and strategic thinking.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Democratic Imperative</h2>
          
          <p>
            Yet the transformative potential of AI will only be realized if we ensure its benefits flow broadly throughout society, rather than concentrating in the hands of a few. History teaches us that the most powerful technologies can either democratize opportunity or entrench existing inequalities. The printing press could spread literacy and enlightenment, or it could be controlled by authorities to limit access to knowledge. The internet could connect and empower individuals globally, or it could create new forms of surveillance and control.
          </p>

          <p>
            AI faces the same crossroads. Developed and deployed democratically, AI could provide personalized education to every child on Earth, offer sophisticated medical diagnosis in underserved communities, accelerate scientific research on humanity&apos;s greatest challenges, and free billions of people to pursue more meaningful, creative work. It could help us design sustainable cities, understand complex ecosystems, and even extend human longevity and wellbeing.
          </p>

          <p>
            But AI concentrated in the hands of a few powerful institutions could exacerbate inequality, eliminate jobs without creating alternatives, and reduce human agency rather than expanding it. The choice is ours to make, and the window for making it may be narrower than we think.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Path Forward</h2>
          
          <p>
            The democratization of AI requires deliberate action across multiple fronts. We need open research that shares advances broadly rather than hoarding them behind corporate walls. We need educational systems that prepare people for an AI-enhanced world. We need economic policies that ensure the productivity gains from AI benefit workers, not just capital owners. We need governance frameworks that maximize AI&apos;s benefits while minimizing risks of misuse.
          </p>

          <p>
            Most fundamentally, we need to maintain human agency in an age of artificial intelligence. The goal is not to replace human judgment but to augment it—to create AI systems that empower individuals and communities to solve problems, pursue opportunities, and express creativity in ways that were previously impossible.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Next Chapter</h2>
          
          <p>
            Standing at this inflection point, we can see the outlines of what AI-enabled human civilization might become. Imagine a world where every person has access to personalized AI tutors, research assistants, and creative collaborators. Where scientific breakthroughs happen at unprecedented speed as human intuition combines with AI&apos;s pattern-matching capabilities. Where routine cognitive work is automated, freeing humans to focus on relationships, creativity, and the exploration of meaning.
          </p>

          <p>
            Imagine economic systems where AI-driven productivity gains are shared broadly, creating unprecedented prosperity and the possibility of shorter work weeks or universal basic services. Imagine governance systems where AI helps policymakers model complex tradeoffs and citizens engage more meaningfully in democratic deliberation. Imagine healthcare where AI-powered diagnosis and treatment are available to everyone, regardless of geographic location or economic status.
          </p>

          <p>
            This is not utopian fantasy—these possibilities are already emerging in laboratories and pilot programs around the world. The question is whether they will be developed and deployed in ways that benefit all of humanity, or whether they will remain the privilege of a fortunate few.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Moment in History</h2>
          
          <p>
            We are living through a moment as significant as the Agricultural Revolution or the Industrial Revolution. Like our ancestors who shaped bronze and iron, who built the first roads and steam engines, who connected the world through telegraph and internet, we have the opportunity—and responsibility—to shape how this new technology develops.
          </p>

          <p>
            The choices we make about AI in the next decade will reverberate through human history. We can choose to make AI a democratizing force that expands opportunity, amplifies human creativity, and helps solve our greatest collective challenges. Or we can allow it to become another source of division and inequality.
          </p>

          <p>
            The arc of human progress has always bent toward liberation—from the constraints of biology, geography, scarcity, and ignorance. AI represents the next bend in that arc, the next great expansion of human possibility. But like all the great technologies before it, its ultimate impact will depend not on its technical capabilities alone, but on the wisdom, values, and collective will of the humans who wield it.
          </p>

          <div className="bg-green-50 rounded-lg p-8 mt-12 text-center">
            <p className="text-lg font-semibold text-green-900 mb-4">
              The future is not predetermined. It is ours to write.
            </p>
            <p className="text-green-800">
              And the story of AI&apos;s place in human progress is still being authored, one choice at a time.
            </p>
          </div>
        </motion.article>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Shape the Future?</h3>
            <p className="text-gray-600 mb-6">
              Join the Human Freedom Foundation in advocating for AI that serves humanity&apos;s highest aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200"
              >
                Learn About Our Mission
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200"
              >
                Join Our Movement
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
