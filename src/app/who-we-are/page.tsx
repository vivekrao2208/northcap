import Image from 'next/image';

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Redefining the edge
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-400">
              Powering the next frontier of quantitative finance.
            </h2>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[300px] md:h-[400px] w-full border">
            <Image
              src="/placeholder-hero.jpg"
              alt="North Pole Capital"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              North Pole Capital is a premier multi-asset class quantitative trading firm 
              dedicated to the advancement of global financial markets. We provide liquidity 
              across diverse asset classes worldwide, harnessing state-of-the-art research, 
              sophisticated quantitative modeling, and unparalleled high-performance computing 
              infrastructure to drive our proprietary trading methodologies. Our 
              innovation-centric paradigm synthesizes rigorous quantitative science with 
              leading-edge technological development to address the most intricate challenges 
              inherent in modern finance. Transcending our trading operations, we are 
              steadfastly committed to fortifying the efficiency, transparency, and 
              structural resilience of the marketplace.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}