'use client';

import { motion } from 'framer-motion';
import { Zap, Layers, Database, Code, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center mt-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'Advanced Consensus',
      description: 'Revolutionary consensus mechanism that achieves unprecedented speed and security through quantum-inspired algorithms.',
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: 'Parallel Execution',
      description: 'Multi-threaded transaction processing that scales infinitely while maintaining atomic consistency across the network.',
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Innovative Storage',
      description: 'Quantum-compressed data structures that reduce storage requirements by 90% while increasing retrieval speeds.',
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: 'Developer Tools',
      description: 'Comprehensive SDK and APIs that make building on Quantum Fusion as simple as traditional web development.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Quantum Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            About Quantum Fusion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {'Reimagining blockchain architecture on Base chain through quantum-inspired technology. '}
            {'QF Network represents the next evolution of decentralized systems, combining cutting-edge '}
            {'consensus mechanisms with unparalleled scalability and developer experience.'}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              <Counter end={100000} duration={2} suffix="+" />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Transactions/sec</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
              <Counter end={99} duration={2} suffix="%" />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
              <Counter end={50} duration={2} suffix="ms" />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Finality</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              <Counter end={90} duration={2} suffix="%" />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Cost Reduction</p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Technology Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {'Built for the Future of Base Chain'}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {'Quantum Fusion leverages the security and ecosystem of Base while introducing '}
                {'revolutionary improvements in speed, cost, and developer experience. Our technology '}
                {'stack is designed to seamlessly integrate with existing Base infrastructure while '}
                {'providing quantum leaps in performance.'}
              </p>
            </div>
