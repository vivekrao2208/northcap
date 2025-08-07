'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="group p-8 border border-border rounded-lg hover:border-border/80 transition-colors duration-200"
            >
                              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href="#" className="flex items-center text-foreground font-medium group-hover:text-foreground/80 transition-colors duration-200">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 