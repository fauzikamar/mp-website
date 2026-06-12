import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
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
            Our
            <br />
            <span className="text-[#dc2626]">Products</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Comprehensive engineering solutions across services, trading, and construction sectors.
          </p>
        </div>
      </section>

      {/* Services Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Services</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Professional electrical engineering services covering design, installation, and integration of electrical systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Power Transformer Repair & Refurbishment</h3>
              <p className="text-slate-600">Comprehensive repair and refurbishment services to extend transformer life and restore performance to optimal levels.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Oil Filtration Work</h3>
              <p className="text-slate-600">Transformer oil filtration and purification services to restore insulation quality and extend equipment life.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Installation, Testing & Commissioning</h3>
              <p className="text-slate-600">Complete installation, rigorous testing, and professional commissioning of electrical systems to ensure optimal performance.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Electrical Engineering Services</h3>
              <p className="text-slate-600">LV & MV electrical installation, switchgear design, cable laying, and transformer installation services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Trading</h2>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            Supply of high-quality power and distribution transformers for various industrial and utility applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Oil Immersed Power Transformers</h3>
              <p className="text-gray-200 mb-6">High-capacity oil immersed power transformers up to 500kV for utility and industrial applications.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Ratings up to 500kV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>New and refurbished units</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Custom specifications available</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Distribution Transformers</h3>
              <p className="text-gray-200 mb-6">Oil and dry type distribution transformers up to 36kV for commercial and industrial networks.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Oil and dry type options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Up to 36kV ratings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Quality assured and certified</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">High Voltage Switchgear</h3>
              <p className="text-gray-200 mb-6">VCB and GIS high voltage switchgear up to 275kV for utility and industrial applications.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>VCB (Vacuum Circuit Breaker)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>GIS (Gas Insulated Switchgear) up to 275kV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Complete switchgear solutions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30">
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Transformer Accessories</h3>
              <p className="text-gray-200 mb-6">Complete range of accessories for power and distribution transformers including radiators, bushings, transformer guards and more.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Radiators and cooling systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Bushings and insulators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Transformer guards and protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Other transformer components</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Construction</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Comprehensive construction services covering civil works and mechanical & electrical (M&E) installations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Civil Works</h3>
              <p className="text-slate-600 mb-4">Professional civil construction services including site preparation, foundations, structural work, and infrastructure development.</p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Site preparation and excavation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Foundation and structural work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Infrastructure development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Mechanical & Electrical (M&E)</h3>
              <p className="text-slate-600 mb-4">Complete mechanical and electrical installation services for industrial, commercial, and infrastructure projects.</p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Mechanical systems installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>Electrical systems installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#dc2626]">•</span>
                  <span>System integration and testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Why Choose Our Products & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30 text-center">
              <p className="text-4xl font-bold text-[#dc2626] mb-3">15+</p>
              <h3 className="text-xl font-bold text-white mb-3">Years Experience</h3>
              <p className="text-gray-200">Proven track record in delivering complex engineering solutions across multiple sectors.</p>
            </div>
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30 text-center">
              <p className="text-4xl font-bold text-[#dc2626] mb-3">200+</p>
              <h3 className="text-xl font-bold text-white mb-3">Projects Completed</h3>
              <p className="text-gray-200">Successfully delivered across diverse industries and applications with measurable results.</p>
            </div>
            <div className="bg-slate-800/50 p-8 border border-[#dc2626]/30 text-center">
              <p className="text-4xl font-bold text-[#dc2626] mb-3">24/7</p>
              <h3 className="text-xl font-bold text-white mb-3">Support Available</h3>
              <p className="text-gray-200">Round-the-clock technical support and emergency response services for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Need Our Products or Services?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us today to discuss how we can support your project requirements.
          </p>
          <Link
            href="/contact"
            className="btn-pmx inline-block border-black bg-transparent text-black hover:border-transparent hover:bg-[#dc2626] hover:text-white"
          >
            Request a Quotation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
