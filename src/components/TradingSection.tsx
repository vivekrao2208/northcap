'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, BarChart3, Activity, Target } from 'lucide-react';

export default function TradingSection() {
  const tradingFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time market analysis with AI-powered insights"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Risk Management",
      description: "Sophisticated risk assessment and mitigation strategies"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Live Monitoring",
      description: "24/7 portfolio monitoring and automated alerts"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Execution",
      description: "High-frequency trading with millisecond precision"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trading Excellence
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the cutting-edge trading environment where technology meets financial expertise. 
              Our advanced trading infrastructure delivers exceptional performance and reliability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {tradingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
                Explore Trading Solutions
              </button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/trading-den.jpg"
                alt="Trading Den"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-6 border border-border"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 