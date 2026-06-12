import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Reliable power systems to support uninterrupted production.',
      icon: '⚙️',
    },
    {
      name: 'Healthcare',
      description: 'Critical electrical infrastructure for hospitals and medical facilities.',
      icon: '🏥',
    },
    {
      name: 'Government',
      description: 'Secure and compliant engineering services for public agencies.',
      icon: '🏛️',
    },
    {
      name: 'Commercial Buildings',
      description: 'Efficient systems for offices, malls, and mixed developments.',
      icon: '🏢',
    },
    {
      name: 'Data Centres',
      description: 'High-availability power and backup solutions.',
      icon: '🖥️',
    },
    {
      name: 'Utilities',
      description: 'Specialized support for power distribution and infrastructure.',
      icon: '⚡',
    },
    {
      name: 'Education Institutions',
      description: 'Reliable power systems for schools, colleges, and universities.',
      icon: '🎓',
    },
    {
      name: 'Infrastructure Projects',
      description: 'Comprehensive electrical solutions for large-scale infrastructure.',
      icon: '🏗️',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="section-full section-dark bg-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/d/1QTbq1CuNDNiX96nKls2HOFJIGB8naCrT"
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="section-content relative z-10">
          <h1 className="mb-6 leading-tight">
            Industries We
            <br />
            <span className="text-[#dc2626]">Serve</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Solutions tailored to your industry's unique requirements and challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded hover:shadow-lg transition-shadow text-center">
                <p className="text-5xl mb-4">{industry.icon}</p>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{industry.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Excel - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Why We Excel in These Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Deep Sector Knowledge</h3>
              <p className="text-gray-200 mb-4">
                With 15+ years of experience across multiple industries, we understand the unique challenges and requirements of each sector.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Industry-specific compliance expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Proven best practices and standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Customized solutions for each sector</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Proven Track Record</h3>
              <p className="text-gray-200 mb-4">
                Our portfolio demonstrates successful project delivery across diverse industries with measurable results.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>200+ completed projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>50+ satisfied industry clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>High project success rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Our Industry Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#dc2626] mb-2">8+</p>
              <p className="text-slate-600 font-semibold">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#dc2626] mb-2">200+</p>
              <p className="text-slate-600 font-semibold">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#dc2626] mb-2">50+</p>
              <p className="text-slate-600 font-semibold">Industry Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#dc2626] mb-2">15+</p>
              <p className="text-slate-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Let's Discuss Your Industry Needs</h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact our team to explore how Magnitude Power can support your sector-specific requirements.
          </p>
          <Link
            href="/contact"
            className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
