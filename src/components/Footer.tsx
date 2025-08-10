'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Globe, Shield, TrendingUp } from 'lucide-react';

export default function Footer() {
  const servicesLinks = [
    { name: 'Investment Management', href: '#' },
    { name: 'Wealth Planning', href: '#' },
    { name: 'Risk Advisory', href: '#' },
    { name: 'Technology Solutions', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News & Insights', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const socialIcons = [
    { icon: <Globe className="w-5 h-5" />, href: '#' },
    { icon: <Shield className="w-5 h-5" />, href: '#' },
    { icon: <TrendingUp className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo-light.png"
                alt="NorthPole Capital"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-3 text-2xl font-extrabold font-orbitron">NorthPole Capital</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Beyond the Quantum Leap. Pioneering the future of financial services with innovation and excellence.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} NorthPole Capital LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 