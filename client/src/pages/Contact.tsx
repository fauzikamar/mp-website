import { Link } from 'wouter';
import { useState } from 'react';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', company: '', industry: '', serviceType: '', message: '' });
  };

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
            Get in
            <br />
            <span className="text-[#dc2626]">Touch</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss your engineering and power solution needs.
          </p>
        </div>
      </section>

      {/* Contact Information - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200 rounded text-center transition-all hover:border-[#dc2626] hover:-translate-y-1 hover:shadow-lg">
              {(() => {
                const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  '8, Jalan Seksyen 2/17, Taman Kajang Utama, 43000 Kajang, Selangor'
                )}`;

                return (
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label="Get directions to Magnitude Power SDN. BHD. on Google Maps"
                  >
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-12 h-12 text-[#dc2626]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 transition-colors hover:text-[#dc2626]">
                      Address
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed transition-colors hover:text-[#dc2626]">
                      MAGNITUDE POWER SDN. BHD.<br />
                      (938838 M)<br />
                      18, Jalan Seksyen 2/17,<br />
                      Taman Kajang Utama,<br />
                      43000 Kajang, Selangor
                    </p>
                  </a>
                );
              })()}
            </div>
            <a
              href="https://wa.me/60198833981"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 border border-gray-200 rounded text-center block hover:border-[#dc2626] transition-colors"
              aria-label="Chat with Magnitude Power on WhatsApp"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-12 h-12 text-[#dc2626]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">WhatsApp</h3>
              <p className="text-slate-600">
                019-8833981<br />
                Available 24/7
              </p>
            </a>
            <a
              href="mailto:magnitudepower@gmail.com"
              className="bg-white p-8 border border-gray-200 rounded text-center block transition-all hover:border-[#dc2626] hover:-translate-y-1 hover:shadow-lg"
              aria-label="Email Magnitude Power"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-12 h-12 text-[#dc2626]" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 transition-colors hover:text-[#dc2626]">Email</h3>
              <p className="text-slate-600">
                magnitudepower@gmail.com<br />
                Response within 24 hours
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white text-center">Send us a Message</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                    placeholder="+60 XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                  >
                    <option value="">Select your industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Government">Government</option>
                    <option value="Commercial">Commercial Buildings</option>
                    <option value="DataCentre">Data Centre</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Education">Education</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                  >
                    <option value="">Select service type</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Maintenance Services">Maintenance Services</option>
                    <option value="Testing & Commissioning">Testing & Commissioning</option>
                    <option value="Power Solutions">Power Solutions</option>
                    <option value="Transformer Services">Transformer Services</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#dc2626]"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Hours Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900 text-center">Service Hours & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded text-center transition-all hover:border-[#dc2626] hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 transition-colors hover:text-[#dc2626]">Business Hours</h3>
              <p className="text-slate-600 mb-2 transition-colors hover:text-[#dc2626]">Monday - Friday</p>
              <p className="text-2xl font-bold text-[#dc2626] mb-4">8:00 AM - 6:00 PM</p>
              <p className="text-slate-600 text-sm transition-colors hover:text-[#dc2626]">Malaysia Standard Time (MST)</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center transition-all hover:border-[#dc2626] hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 transition-colors hover:text-[#dc2626]">Emergency Support</h3>
              <p className="text-slate-600 mb-2 transition-colors hover:text-[#dc2626]">Available 24/7</p>
              <p className="text-2xl font-bold text-[#dc2626] mb-4">Round the Clock</p>
              <p className="text-slate-600 text-sm transition-colors hover:text-[#dc2626]">For critical issues and emergencies</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center transition-all hover:border-[#dc2626] hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 transition-colors hover:text-[#dc2626]">Response Time</h3>
              <p className="text-slate-600 mb-2 transition-colors hover:text-[#dc2626]">Standard Inquiries</p>
              <p className="text-2xl font-bold text-[#dc2626] mb-4">Within 24 Hours</p>
              <p className="text-slate-600 text-sm transition-colors hover:text-[#dc2626]">We prioritize urgent matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Our team is ready to discuss your project and provide tailored solutions for your needs.
          </p>
          <Link
            href="/"
            className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
