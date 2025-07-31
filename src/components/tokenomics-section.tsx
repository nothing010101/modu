'use client';

import type { ReactNode } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, TrendingUp, Users, Zap, Shield, Rocket } from 'lucide-react';

interface TokenomicsData {
  name: string;
  value: number;
  color: string;
  description: string;
}

interface UtilityFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface StakingTier {
  tier: string;
  minAmount: string;
  apy: string;
  benefits: string[];
}

const tokenomicsData: TokenomicsData[] = [
  {
    name: 'Community',
    value: 40,
    color: '#8B5CF6',
    description: 'Distributed to community members through airdrops, rewards, and governance participation'
  },
  {
    name: 'Liquidity',
    value: 30,
    color: '#06B6D4',
    description: 'Locked in DEX pools to ensure stable trading and price discovery'
  },
  {
    name: 'Development',
    value: 20,
    color: '#10B981',
    description: 'Reserved for protocol development, audits, and technical improvements'
  },
  {
    name: 'Marketing',
    value: 10,
    color: '#F59E0B',
    description: 'Allocated for marketing campaigns, partnerships, and ecosystem growth'
  }
];

const stakingData = [
  { tier: 'Bronze', minAmount: '1,000', apy: '12%', multiplier: 1.2 },
  { tier: 'Silver', minAmount: '10,000', apy: '18%', multiplier: 1.8 },
  { tier: 'Gold', minAmount: '50,000', apy: '25%', multiplier: 2.5 },
  { tier: 'Quantum', minAmount: '100,000', apy: '35%', multiplier: 3.5 }
];

const utilityFeatures: UtilityFeature[] = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Governance Rights',
    description: 'Vote on protocol upgrades, treasury allocation, and ecosystem decisions'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking QF tokens with competitive APY rates'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Transaction Discounts',
    description: 'Reduced fees for DeFi operations and cross-chain transactions'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Premium Features',
    description: 'Access to advanced trading tools and exclusive platform features'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Yield Farming',
    description: 'Participate in liquidity mining programs with boosted rewards'
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: 'NFT Minting',
    description: 'Use QF tokens to mint exclusive NFTs and access special collections'
  }
];

const stakingTiers: StakingTier[] = [
  {
    tier: 'Bronze',
    minAmount: '1,000 QF',
    apy: '12%',
    benefits: ['Basic staking rewards', 'Community access', 'Monthly airdrops']
  },
  {
    tier: 'Silver',
    minAmount: '10,000 QF',
    apy: '18%',
    benefits: ['Enhanced rewards', 'Priority support', 'Governance voting', 'Beta access']
  },
  {
    tier: 'Gold',
    minAmount: '50,000 QF',
    apy: '25%',
    benefits: ['Premium rewards', 'VIP support', 'Advanced features', 'Partner benefits']
  },
  {
    tier: 'Quantum',
    minAmount: '100,000 QF',
    apy: '35%',
    benefits: ['Maximum rewards', 'Direct team access', 'Alpha features', 'Revenue sharing']
  }
];

const RADIAN = Math.PI / 180;

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: CustomLabelProps): JSX.Element => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-sm font-semibold"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TokenomicsSection(): JSX.Element {
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Tokenomics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            QF Tokenomics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {'Discover the economic model powering the Quantum Fusion ecosystem on Base chain'}
          </p>
        </div>

        {/* Token Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-600">Total Supply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold mb-2">1,000,000,000</p>
              <p className="text-gray-600 dark:text-gray-300">QF Tokens</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-purple-600">Network</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold mb-2">Base</p>
              <p className="text-gray-600 dark:text-gray-300">Ethereum L2</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-600">Token Type</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold mb-2">ERC-20</p>
              <p className="text-gray-600 dark:text-gray-300">Standard</p>
            </CardContent>
          </Card>
        </div>

        {/* Distribution Chart and Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Pie Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Token Distribution</CardTitle>
              <CardDescription className="text-center">
                How QF tokens are allocated across the ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {tokenomicsData.map((entry: TokenomicsData, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Allocation Breakdown */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Allocation Breakdown</CardTitle>
              <CardDescription>
                Detailed explanation of token distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {tokenomicsData.map((item: TokenomicsData, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <span className="font-bold text-lg">{item.value}%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Token Utility */}
        <div className="mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">Token Utility</CardTitle>
              <CardDescription className="text-lg">
                Multiple use cases driving real value and demand for QF tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {utilityFeatures.map((feature: UtilityFeature, index: number) => (
                  <div 
                    key={index}
                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staking Rewards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Staking Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Staking Rewards</CardTitle>
              <CardDescription>
                APY rates by staking tier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stakingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tier" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'multiplier' ? `${value}x` : `${value}%`,
                        name === 'multiplier' ? 'Reward Multiplier' : 'APY'
                      ]}
                    />
                    <Legend />
                    <Bar dataKey="apy" fill="#8B5CF6" name="APY %" />
                    <Bar dataKey="multiplier" fill="#06B6D4" name="Multiplier" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Staking Tiers */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Staking Tiers</CardTitle>
              <CardDescription>
                Unlock higher rewards with larger stakes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stakingTiers.map((tier: StakingTier, index: number) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg">{tier.tier}</h4>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {tier.apy} APY
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Minimum: {tier.minAmount}
                  </p>
                  <div className="space-y-1">
                    {tier.benefits.map((benefit: string, benefitIndex: number) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Base Chain Benefits */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Base Chain Integration</CardTitle>
            <CardDescription className="text-lg">
              Why QF chose Base as its home blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Low Fees</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {'Minimal transaction costs for all QF operations'}
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Fast Transactions</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {'Near-instant confirmation times'}
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ethereum Security</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {'Inherits Ethereum mainnet security'}
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Growing Ecosystem</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {'Access to thriving DeFi ecosystem'}
                </p>
              </div>
