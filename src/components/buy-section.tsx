'use client';

import { useState } from 'react';
import { WalletDefault } from '@coinbase/onchainkit/wallet';
import { Buy } from '@coinbase/onchainkit/buy';
import { useAccount } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Wallet, ArrowRight, CheckCircle } from 'lucide-react';
import type { QFToken } from '@/types/token';

const qfToken: QFToken = {
  name: 'Quantum Fusion',
  address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
  symbol: 'QF',
  decimals: 18,
  image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/quantum-fusion-logo.png',
  chainId: 8453,
};

const dexLinks = [
  {
    name: 'Uniswap',
    url: `https://app.uniswap.org/#/swap?outputCurrency=${qfToken.address}&chain=base`,
    description: 'Most popular DEX on Base',
  },
  {
    name: 'Aerodrome',
    url: `https://aerodrome.finance/swap?to=${qfToken.address}`,
    description: 'Native Base DEX',
  },
  {
    name: 'SushiSwap',
    url: `https://www.sushi.com/swap?chainId=8453&token1=${qfToken.address}`,
    description: 'Multi-chain DEX',
  },
];

export default function BuySection(): JSX.Element {
  const { isConnected } = useAccount();
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How to Buy QF
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join the Quantum Fusion revolution on Base chain. Follow these simple steps to get your QF tokens.
          </p>
        </div>

        {/* Main Buy Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Wallet Connection & Buy Component */}
          <div className="space-y-8">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">
                  Connect & Buy
                </CardTitle>
                <CardDescription>
                  Connect your wallet and swap for QF tokens directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Wallet Connection */}
                <div className="flex justify-center">
                  <WalletDefault />
                </div>

                {/* Buy Component */}
                {isConnected && (
                  <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                    <Buy toToken={qfToken} />
                  </div>
                )}

                {!isConnected && (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    Connect your wallet to start buying QF tokens
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Token Info */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl">Token Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Symbol:</span>
                    <p className="font-semibold">{qfToken.symbol}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Network:</span>
                    <p className="font-semibold">Base</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Decimals:</span>
                    <p className="font-semibold">{qfToken.decimals}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Chain ID:</span>
                    <p className="font-semibold">{qfToken.chainId}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Contract Address:</span>
                  <p className="font-mono text-xs break-all bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1">
                    {qfToken.address}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DEX Links */}
          <div className="space-y-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Alternative DEX Options</CardTitle>
                <CardDescription>Trade QF on these popular decentralized exchanges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dexLinks.map((dex) => (
                  <Card key={dex.name} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{dex.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {dex.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild className="ml-4">
                        <a href={dex.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Trade
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
