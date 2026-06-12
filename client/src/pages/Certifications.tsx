import { Link } from 'wouter';

import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Certifications() {
  const certifications = [
    {
      name: 'CIDB Registration',
      category: 'Construction Industry',
      description: 'Construction Industry Development Board registration for construction and engineering works.',
      // Icon intentionally omitted (original rendering used checkmark), keeping UI stable.
    },
    {
      name: 'Suruhanjaya Tenaga Compliance',
      category: 'Energy Sector',
      description: 'Full compliance with Energy Commission (Suruhanjaya Tenaga) regulations and standards.',
    },
    {
      name: 'Safety Certifications',
      category: 'Workplace Safety',
      description: 'Comprehensive safety certifications ensuring safe work practices and employee protection.',
    },
    {
      name: 'OEM Partnerships',
      category: 'Equipment & Technology',
      description: 'Authorized partnerships with leading Original Equipment Manufacturers for quality assurance.',
    },
    {
      name: 'ISO Certifications',
      category: 'Quality Management',
      description: 'ISO standards compliance for quality, safety, and environmental management.',
    },
    {
      name: 'Professional Standards',
      category: 'Engineering Excellence',
      description: 'Adherence to professional engineering standards and industry best practices.',
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
            Quality, Safety &
            <br />
            <span className="text-[#dc2626]">Compliance</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Committed to maintaining compliance with all relevant regulations and industry best practices.
          </p>
        </div>
      </section>

      {/* Certifications Grid - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#dc2626]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#1a1a1a]">✓</div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{cert.name}</h3>
                <p className="text-[#dc2626] text-sm font-semibold mb-3">{cert.category}</p>
                <p className="text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-6">Regulatory Compliance</h3>
              <p className="text-gray-100 mb-6 leading-relaxed">
                We maintain strict compliance with all Malaysian electrical regulations, safety standards, and industry requirements. Our CIDB registration and Suruhanjaya Tenaga compliance ensure that all our work meets the highest regulatory standards.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Full regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Regular compliance audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Updated certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-6">Safety & Quality</h3>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Safety is paramount in everything we do. Our comprehensive safety certifications and OEM partnerships ensure that we deliver work of the highest quality using approved equipment and best practices.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Safety-first operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Quality assurance processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626]">•</span>
                  <span>Continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Gallery - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* ISO 9001 */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/17GmUiH4yKM_rkYcTOh69ESvO0tWIQtfD"
                alt="ISO 9001:2015 Certificate"
                className="w-full h-auto object-cover"

              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">ISO 9001:2015</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Quality Management System</p>
              </div>
            </div>

            {/* CIDB */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/1B7MQ1ikvBQhEHvOLe7WzUHjjqQt_SCpt"
                alt="CIDB Registration Certificate"


                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">CIDB Registration</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Construction Industry Development Board</p>
              </div>
            </div>

            {/* SESB */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/1dt8U0qDQ_johbdIaal-cgYCwgUB2F9T-"

                alt="SESB Certification"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">SESB Certification</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Electrical Safety Standards</p>
              </div>
            </div>

            {/* TNB Supplier */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/1Vz75QR7-Hi7eSHFwtZbY8dyg22A_0MAV"

                alt="TNB Supplier Certificate"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">TNB Supplier</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Authorized Contractor & Supplier</p>
              </div>
            </div>

            {/* KKM Bumiputera */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/14uRQlM1JggcUy8bU3qipOeg42vbqW9jm"

                alt="KKM Bumiputera Certificate"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">KKM Bumiputera</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Ministry of Works Certification</p>
              </div>
            </div>

            {/* KKM */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/163q95b43YnCg801HG3Pe5205qTAU-5fL"

                alt="KKM Certificate"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">KKM Certification</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Ministry Approval & Compliance</p>
              </div>
            </div>

            {/* ST */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/d/1JyJJeDk9Z-7ZzOaMYig_0Bhq1_eoVVkv"

                alt="ST Certification"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">ST Certification</h3>
                <p className="text-[#dc2626] text-sm font-semibold">Suruhanjaya Tenaga Technical Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Trust Our Certified Expertise</h2>
          <p className="text-xl text-gray-100 mb-8">
            Partner with a certified, compliant, and committed engineering firm for your power and electrical solutions.
          </p>
          <Link
            href="/contact"
            className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
          >
            Request Our Credentials
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

