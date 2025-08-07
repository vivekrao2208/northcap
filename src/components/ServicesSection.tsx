'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Investment Management",
      description: "Sophisticated portfolio strategies designed for optimal returns and risk management."
    },
    {
      title: "Wealth Planning",
      description: "Comprehensive financial planning to secure your legacy and achieve long-term goals."
    },
    {
      title: "Risk Advisory",
      description: "Expert risk assessment and mitigation strategies for institutional clients."
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge fintech solutions to streamline operations and enhance performance."
    },
    {
      title: "Global Markets",
      description: "Access to international markets with local expertise and global perspective."
    },
    {
      title: "ESG Investing",
      description: "Sustainable investment strategies that align with your values and objectives."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet the evolving needs of modern investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-gray-900 font-medium group-hover:text-gray-700 transition-colors duration-200">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 