'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Github, Twitter, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, external = false }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
  >
    <span className="flex items-center gap-1">
      {children}
      {external && <ExternalLink className="w-3 h-3" />}
    </span>
  </Link>
);

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 hover:scale-105"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {icon}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900/20 border-t border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">QF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quantum Fusion</h3>
                <p className="text-sm text-gray-400">Base Chain Memecoin</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {'The next-generation memecoin powered by quantum technology on Base chain.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
              <span>Built on Base</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#tokenomics">Tokenomics</FooterLink>
              </li>
              <li>
                <FooterLink href="#buy">Buy QF</FooterLink>
              </li>
              <li>
                <FooterLink href="#community">Community</FooterLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="https://base.org" external>
                  Base Chain
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://onchainkit.xyz" external>
                  OnchainKit
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/whitepaper" external>
                  Whitepaper
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/audit" external>
                  Audit Report
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <SocialLink
                href="https://twitter.com/quantumfusion"
                icon={<Twitter className="w-5 h-5" />}
                label="Twitter"
              />
              <SocialLink
                href="https://github.com/quantumfusion"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://discord.gg/quantumfusion"
                icon={<MessageCircle className="w-5 h-5" />}
                label="Discord"
              />
            </div>
            <div className="space-y-3">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 Quantum Fusion. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Built with OnchainKit SDK by Modu on Ohara</p>
            </div>
