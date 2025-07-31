'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Rocket, Users, Building, Globe } from 'lucide-react';

interface RoadmapPhase {
  quarter: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
}

const roadmapPhases: RoadmapPhase[] = [
  {
    quarter: 'Q1 2024',
    title: 'Token Launch',
    description: 'Foundation & Base Integration',
    items: ['QF Token Launch on Base', 'Smart Contract Deployment', 'Initial Liquidity Pool', 'Community Genesis'],
    icon: Rocket,
    completed: true,
  },
  {
    quarter: 'Q2 2024',
    title: 'Community Building',
    description: 'Growth & Exchange Listings',
    items: ['DEX Listings (Uniswap, SushiSwap)', 'Community Governance Launch', 'Partnership Announcements', 'Marketing Campaign'],
    icon: Users,
    completed: true,
  },
  {
    quarter: 'Q3 2024',
    title: 'DApp Partnerships',
    description: 'Ecosystem Expansion',
    items: ['DeFi Protocol Integrations', 'Cross-chain Bridge Development', 'Staking Rewards Program', 'Developer Grants'],
    icon: Building,
    completed: false,
  },
  {
    quarter: 'Q4 2024',
    title: 'Mass Adoption',
    description: 'Advanced Features & Scale',
    items: ['Mobile App Launch', 'Enterprise Partnerships', 'Advanced Trading Features', 'Global Marketing Push'],
    icon: Globe,
    completed: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function RoadmapSection(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Roadmap
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {'Our journey to revolutionize the quantum fusion ecosystem on Base chain'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-700 hidden md:block">
            <motion.div
              variants={lineVariants}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 origin-top"
              style={{ height: '75%' }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {roadmapPhases.map((phase: RoadmapPhase, index: number) => {
              const isEven: boolean = index % 2 === 0;
              const IconComponent = phase.icon;

              return (
                <motion.div
                  key={phase.quarter}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          phase.completed 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {phase.quarter}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {phase.description}
                          </p>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {phase.title}
                      </h4>

                      <ul className="space-y-2">
                        {phase.items.map((item: string, itemIndex: number) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            {phase.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${
                              phase.completed 
                                ? 'text-slate-700 dark:text-slate-300' 
                                : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className={`w-8 h-8 rounded-full border-4 ${
                        phase.completed
                          ? 'bg-green-500 border-green-300 dark:border-green-600'
                          : 'bg-white dark:bg-slate-800 border-blue-300 dark:border-blue-600'
                      } shadow-lg`}
                    >
                      {phase.completed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Mobile Timeline Indicator */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      phase.completed
                        ? 'bg-green-500 border-green-300 text-white'
                        : 'bg-white border-blue-300 text-blue-600'
                    }`}>
                      {phase.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-bold">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded">
                      {phase.completed && (
                        <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for even spacing */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {'2/4 Phases Complete'}
              </span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {'50% Progress'}
