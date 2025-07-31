'use client';

import { useState } from 'react';
import { Twitter, MessageCircle, Send, Users, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface CommunityStats {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  gradient: string;
}

export default function CommunitySection(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);

  const communityStats: CommunityStats[] = [
    { label: 'Community Members', value: '25,000+', icon: Users },
    { label: 'Daily Active Users', value: '5,000+', icon: TrendingUp },
    { label: 'Quantum Transactions', value: '100K+', icon: Zap },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/quantumfusion',
      icon: Twitter,
      description: 'Follow us for the latest updates and quantum insights',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/quantumfusion',
      icon: MessageCircle,
      description: 'Join our community discussions and get support',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/quantumfusion',
      icon: Send,
      description: 'Get instant updates and connect with fellow QF holders',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setEmail('');
    setIsSubscribing(false);
    
    // Show success message (you can implement toast notification here)
    alert('Successfully subscribed to QF updates!');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              QF Community
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {'Connect with quantum enthusiasts, developers, and innovators building the future of decentralized finance on Base'}
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {communityStats.map((stat: CommunityStats, index: number) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social: SocialLink, index: number) => (
            <Card 
              key={index}
              className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(social.href, '_blank')}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${social.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{social.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{social.description}</p>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      window.open(social.href, '_blank');
                    }}
                  >
                    Join Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {'Stay Updated with QF'}
                </h3>
                <p className="text-gray-300">
                  {'Get the latest news, updates, and exclusive insights delivered to your inbox'}
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing || !email}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 disabled:opacity-50"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              
              <p className="text-xs text-gray-400 text-center mt-4">
