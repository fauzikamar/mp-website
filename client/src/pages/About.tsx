import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
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
            About
            <br />
            <span className="text-[#dc2626]">Magnitude Power</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            A trusted Malaysian engineering solutions provider delivering reliable electrical and power systems.
          </p>
        </div>
      </section>

      {/* Company Profile - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            <strong>Incorporated on 1 April 2011</strong>, Magnitude Power Sdn Bhd is an Electrical Equipment Supplier and Services Company specializing in comprehensive electrical services ranging from Low Voltage (LV) and High Voltage (HV) up to 500kV.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are successfully registered as a <strong>supplier and distributor with the Ministry of Finance (MOF)</strong>, <strong>CIDB</strong> and <strong>Tenaga Nasional Berhad (TNB)</strong>. We serve as an <strong>authorized contractor for installation, servicing, testing and commissioning of power transformers</strong> for Malaysia Transformer Manufacturing (MTM), TNBLab, TNB Remaco, and TNB Renewable (a subsidiary of TNB).
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team combines technical expertise, practical field experience, and a commitment to safety to ensure every project is completed to the highest standards. We are dedicated to providing Malaysia's power industry with quality products and services that are more affordable, efficient, and reliable.
          </p>
        </div>
      </section>

      {/* Vision & Mission - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6 text-white">Our Vision</h2>
              <p className="text-xl text-gray-100 leading-relaxed">
                To be among the leading Electrical Services Provider in the country, delivering innovative and reliable power solutions.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-100 mb-4 leading-relaxed">
                To provide Malaysia's Power Industry with quality products and servicing that are more affordable, efficient and reliable.
              </p>
              <ul className="text-lg text-gray-100 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1">•</span>
                  <span>Deliver high-quality electrical equipment and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1">•</span>
                  <span>Maintain highest standards of safety and technical excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1">•</span>
                  <span>Build long-term partnerships with clients and stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Integrity</h3>
              <p className="text-slate-600">We conduct our business with honesty and professionalism.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Safety</h3>
              <p className="text-slate-600">We prioritize the well-being of our employees, clients, and stakeholders.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Quality</h3>
              <p className="text-slate-600">We deliver solutions that meet stringent technical standards.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Reliability</h3>
              <p className="text-slate-600">We provide dependable services and responsive support.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Innovation</h3>
              <p className="text-slate-600">We continuously seek better and more efficient solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how we can support your engineering and power system requirements.
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
