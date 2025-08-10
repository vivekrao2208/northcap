'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const servicesTop = [
    {
      title: "Investment Management"
    },
    {
      title: "Wealth Planning"
    },
    {
      title: "Risk Advisory"
    }
  ];

	const servicesBottom = [
	   {
      title: "Technology Solutions"
    },
    {
      title: "Global Markets"
    },
    {
      title: "ESG Investing"
    }
  ]
  return (
    <section id="services" className="min-h-screen py-8 sm:py-12 lg:py-0 lg:h-screen bg-background relative bg-cover bg-center bg-no-repeat flex items-center" style={{backgroundImage: 'url(/geneva.png)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize text-foreground mb-4 sm:mb-6 border-b border-primary pt-4 sm:pt-8 lg:pt-14 pb-4 sm:pb-6 lg:pb-10">
            Our Services
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 pt-4 sm:pt-6 lg:pt-10">
          {servicesTop.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-28 sm:h-32 lg:h-32 p-4 sm:p-6 border bg-white/10 backdrop-blur-xs border-primary rounded-xl transition-all duration-300 hover:shadow-xl flex flex-col justify-center"
            >
				<h3 className="text-lg sm:text-xl lg:text-3xl font-extrabold text-primary mb-2 sm:mb-4 group-hover:text-foreground-primary/80 transition-colors duration-200">
					{service.title}
				</h3>

				<Link href="#" className="flex items-center text-foreground font-medium group-hover:text-foreground/80 transition-colors duration-200">
					Learn More
					<ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
				</Link>
            </motion.div>
          ))}
			  </div>
			  
			   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 pt-8 sm:pt-16 lg:pt-32">
          {servicesBottom.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-28 sm:h-32 lg:h-32 p-4 sm:p-6 border bg-white/10 backdrop-blur-xs border-primary rounded-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-center"
            >
				<h3 className="text-lg sm:text-xl lg:text-3xl font-extrabold text-primary mb-2 sm:mb-4 group-hover:text-foreground-primary/80 transition-colors duration-200">
					{service.title}
				</h3>

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