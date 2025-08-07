'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security protocols ensure your investments are protected at every level."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Strategic Growth",
      description: "Data-driven insights and advanced analytics power our investment strategies."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Seasoned professionals with deep industry knowledge guide every decision."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Redefining Financial Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NorthPole Capital combines decades of financial expertise with cutting-edge technology to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="text-gray-900 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 