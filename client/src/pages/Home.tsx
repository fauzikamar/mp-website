import { Link } from 'wouter';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const heroFadeThreshold = useMemo(() => 400, []); // start fade after ~2/4 screen height








  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > heroFadeThreshold);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [heroFadeThreshold]);

  const clientLogos = [
    { src: "https://lh3.googleusercontent.com/d/12eZgqzZWVzOqEgHCyPfrj54u_Y1kE8vU", alt: "POWERTEK" },
    { src: "https://lh3.googleusercontent.com/d/13EgjBYN3smcHOEfGGExlAkAlEGIZVC4O", alt: "KTMB" },
    { src: "https://lh3.googleusercontent.com/d/13h4bGSW-T9zrBMvOVmdBhPB4VCVHwk6N", alt: "WESTPORT" },
    { src: "https://lh3.googleusercontent.com/d/148fZCoF3hRC1Jv7VGH17UKRS6yItrpec", alt: "YTL" },
    { src: "https://lh3.googleusercontent.com/d/17xf2m0ZOYkR3gdiypFHirMuwXPH5XdFL", alt: "PTP" },
    { src: "https://lh3.googleusercontent.com/d/18hx9yqRuAn6Fvl1KEVA4xmGp4sQDzwF_", alt: "NORTHPORT" },
    { src: "https://lh3.googleusercontent.com/d/18wekirPcTouV5kYtnvueATauL2CLPNx6", alt: "POWER CABLES" },
    { src: "https://lh3.googleusercontent.com/d/19jt11Ti1gT2zNQlib7_a1S8pU6v3aQTF", alt: "MAS" },
    { src: "https://lh3.googleusercontent.com/d/1A3SxIQWY7BgcXLK3DBkN-CVXj2Oh_vWn", alt: "POS" },
    { src: "https://lh3.googleusercontent.com/d/1C0dRx55qO-adfAM9-pcctjPOhUWluSNu", alt: "TNB RENEWABLES" },
    { src: "https://lh3.googleusercontent.com/d/1DWmAoKzSO4a1_bUIc5yRSZZLRHHmgKmE", alt: "MASTEEL" },
    { src: "https://lh3.googleusercontent.com/d/1DlSb1dg2zcyE85qtXtVaOAf0GZuWoa3c", alt: "RAPIDKL" },
    { src: "https://lh3.googleusercontent.com/d/1EBdU27tK3TaAaqnX13Ml2fStJ_FP3Ogf", alt: "REMACO" },
    { src: "https://lh3.googleusercontent.com/d/1FLVY9CNIaupnM8K9CSvVRaMClTdRgZP1", alt: "MN" },
    { src: "https://lh3.googleusercontent.com/d/1MmqDIeTGdWU3H69cJTqivbIfWFkuRcok", alt: "TH" },
    { src: "https://lh3.googleusercontent.com/d/1Mxqvtb-oQLq7ndqh-GQzfLIzB9kShQpx", alt: "MAHKOTA" },
    { src: "https://lh3.googleusercontent.com/d/1NPlBg8ieNddXmBtIdQbk8zNzuLdhiA1a", alt: "UMW" },
    { src: "https://lh3.googleusercontent.com/d/1Sjm4vqh8IbUxN0q4g6pQGNxYwwRNq2Kt", alt: "TNEC" },
    { src: "https://lh3.googleusercontent.com/d/1SqflCcoPE8oF7Nz-bcSZr7pVAzIVtmA_", alt: "MAHB" },
    { src: "https://lh3.googleusercontent.com/d/1TVDPHfBFwO73WPc9get8_ojz7mdbL-St", alt: "TNB GENCO" },
    { src: "https://lh3.googleusercontent.com/d/1TxIMaCmLOUCzV1fwozYQzU-x2KD8DiQA", alt: "MTM" },
    { src: "https://lh3.googleusercontent.com/d/1W6zihB9KetDEPgBV-Z_qZVSwkxGC01CH", alt: "MALAKOFF" },
    { src: "https://lh3.googleusercontent.com/d/1WQQc-UE4CGme3GoxrwMZeoOiEDvTuDNW", alt: "UTM" },
    { src: "https://lh3.googleusercontent.com/d/1WRK5EhyMBOGmhr_WmGgLuJiUBwTonGkj", alt: "UM" },
    { src: "https://lh3.googleusercontent.com/d/1Yz9jB2pqvXso8BagUefOg3yhpJimDzk9", alt: "TNLABS" },
    { src: "https://lh3.googleusercontent.com/d/1bMgYO-nQ3UehNNiwLAbRQIhD51VIyJ1y", alt: "SAM" },
    { src: "https://lh3.googleusercontent.com/d/1dwSIKQxmrE9j39hU1orcL8U57J3JIXKA", alt: "SESB" },
    { src: "https://lh3.googleusercontent.com/d/1hNEHEJJEuSqafsMle4-6A70R7cSnANnA", alt: "UITM" },
    { src: "https://lh3.googleusercontent.com/d/1nGVnoCJInVmpqGTddcvrmE2urmuelbcp", alt: "SINO" },
    { src: "https://lh3.googleusercontent.com/d/1nwaNBzl_hD6LVP26kuqUDehdMuwh5pNh", alt: "TSG_LOGO" },
    { src: "https://lh3.googleusercontent.com/d/1o7FotrByRVD50WR3_Wj9XwxVtNjEe1yq", alt: "KEV" },
    { src: "https://lh3.googleusercontent.com/d/1oX51vRJ03T7AjTrLW_RX5lq63cU-m8V5", alt: "PTIS" },
    { src: "https://lh3.googleusercontent.com/d/1onLWMMroq7TYQh0b_grbqUK19DoKhNti", alt: "SCATEC" },
    { src: "https://lh3.googleusercontent.com/d/1rdmlOMFBOfTcSrRAuYN-9XP8OZ1k9asU", alt: "SESCO" },
    { src: "https://lh3.googleusercontent.com/d/1u6FawMeK02ZorvV56ENHdw3Tfs9fdY9T", alt: "NOVA" },
    { src: "https://lh3.googleusercontent.com/d/1utvJjVLlo34xwUS9BK9V0S1EYr-Dt5cO", alt: "ON9" },
    { src: "https://lh3.googleusercontent.com/d/1wVPA6X9bl2vBSiZEnUjXkR0xz2u0Y6YP", alt: "WARNA" },
    { src: "https://lh3.googleusercontent.com/d/14dDYTQJHvlKQOZgzYhA6IG5lRAwoVGV4", alt: "GENTING" },
    { src: "https://lh3.googleusercontent.com/d/184VfLsJD9VKtWNQCB-AXFTFjzRCnQN5Q", alt: "CIMA" },
    { src: "https://lh3.googleusercontent.com/d/1FwdSdYhkl6iN8Cn-2-p7NmHan26m4vkX", alt: "DEFTECH" },
    { src: "https://lh3.googleusercontent.com/d/1JC42Ny2EpGEfGdFh0-J6mrwFEM_xyRwI", alt: "HITACHI" },
    { src: "https://lh3.googleusercontent.com/d/1JRqpNZ00pnt---10dVcXIP6nRvbBrXei", alt: "ETD" },
    { src: "https://lh3.googleusercontent.com/d/1QUzNsgECUaxq1fJOOhlvQ_KzuPwE1kyz", alt: "EDRA" },
    { src: "https://lh3.googleusercontent.com/d/1TxSeZpE3Qzw5oQInEQ2AGUCb1602sccp", alt: "HYUNDAI" },
    { src: "https://lh3.googleusercontent.com/d/1bWWNtrv3WiZdy8cWeGmnZa1fCOcOd-1u", alt: "FGV" },
    { src: "https://lh3.googleusercontent.com/d/1fbnsJNDELdd1jehMsJlNK-g5CZh26BQr", alt: "AIR SELANGOR" },
    { src: "https://lh3.googleusercontent.com/d/1gXJNl96KvX1ofgkltqK5CHXJO9shDYVw", alt: "ANPEC" },
    { src: "https://lh3.googleusercontent.com/d/1jlheF5A--3dX2tikdbcl7lXSTNE7Gfdf", alt: "CYPARK" },
    { src: "https://lh3.googleusercontent.com/d/1r1paBc5iIFCWVEe1iUkLUf8ZuYCBKykr", alt: "BINTAI" },
    { src: "https://lh3.googleusercontent.com/d/1wVPA6X9bl2vBSiZEnUjXkR0xz2u0Y6YP", alt: "BETAPAC" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section - Full Width Dark */}
      <section
        className="section-full section-dark bg-pattern relative overflow-hidden"
        style={{ height: '100vh', minHeight: '600px' }}
        aria-hidden={hasScrolled}
      >
        <div
          className="absolute inset-0 opacity-25 transition-opacity duration-500"
          style={{ opacity: hasScrolled ? 0 : undefined }}


        >
          <img
            src="https://lh3.googleusercontent.com/d/1i8skfaHfBmp6Kc2DZCDIp20yOK8D3yTk"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="section-content relative z-10 transition-opacity duration-500"
          style={{ opacity: hasScrolled ? 0 : undefined }}
        >



          <h1 className="mb-6 leading-tight">

            Powering Reliability.
            <br />
            <span className="text-red-600">Delivering Excellence.</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Magnitude Power Sdn Bhd provides professional electrical engineering, power system maintenance, and energy solutions for industrial, commercial, and government sectors across Malaysia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-pmx bg-red-600 text-white hover:bg-red-700 hover:!text-white"
            >
              Request a Quotation
            </Link>
            <Link href="/products" className="btn-pmx-light border-2 border-white text-white hover:bg-red-600 hover:text-white hover:border-red-600">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snapshot - Light */}
      <section className="section-full section-light">


        <div className="section-content">
          <h2 className="mb-6 text-slate-900">About Magnitude Power</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            <strong>Incorporated on 1 April 2011</strong>, Magnitude Power Sdn Bhd is an Electrical Equipment Supplier and Services Company specializing in electrical services ranging from Low Voltage (LV) and High Voltage (HV) up to 500kV.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are successfully registered as a supplier and distributor with the <strong>Ministry of Finance (MOF)</strong>, <strong>Ministry of Power (MOP)</strong>, <strong>Construction Industry Development Board (CIDB)</strong> and <strong>Ministry of Finance (MOF)</strong>, and <strong>Tenaga Nasional Berhad (TNB)</strong>. We serve as an authorized contractor for installation, servicing, testing and commissioning of power transformers for <strong>Malaysia Transformer Manufacturing (MTM), TNBLAB, TNB Remaco and TNB Renewables</strong> (subsidiaries of TNB).
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to provide Malaysia's power industry with quality products and services that are more affordable, efficient, and reliable.
          </p>
        </div>
      </section>

      {/* Core Services Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Our Products & Services</h2>
          <p className="text-xl text-gray-100 mb-12">
            Comprehensive solutions across services, trading, and construction sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <div className="bg-slate-800/50 p-8 border border-red-600/30">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Services</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Power Transformer Repair & Refurbishment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Installation, Testing & Commissioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>High Voltage & Low Voltage Services</span>
                </li>
              </ul>
              <Link href="/products" className="text-red-600 font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Trading */}
            <div className="bg-slate-800/50 p-8 border border-red-600/30">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Trading</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Oil Immersed Power Transformers (up to 500kV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Distribution Transformers (Oil & Dry type, up to 36kV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>High Voltage Switchgear (VCB & GIS, up to 275kV)</span>
                </li>
              </ul>
              <Link href="/products" className="text-red-600 font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Construction */}
            <div className="bg-slate-800/50 p-8 border border-red-600/30">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Construction</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Civil works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Mechanical & electrical (M&E)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">•</span>
                  <span>System integration</span>
                </li>
              </ul>
              <Link href="/products" className="text-red-600 font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Why Choose Magnitude Power</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Team</h3>
              <p className="text-slate-600">Experienced and qualified engineering team with proven expertise in power systems.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Track Record</h3>
              <p className="text-slate-600">Proven project delivery record across multiple sectors and industries.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance & Safety</h3>
              <p className="text-slate-600">Compliance with safety and regulatory standards in all operations.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Support</h3>
              <p className="text-slate-600">Fast and responsive technical support when you need it most.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customized Solutions</h3>
              <p className="text-slate-600">Customized engineering solutions tailored to your specific requirements.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Focused</h3>
              <p className="text-slate-600">Quality-focused execution on every project, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Manufacturing', 'Healthcare', 'Government Agencies', 'Commercial Buildings', 'Data Centres', 'Utilities', 'Education Institutions', 'Infrastructure Projects'].map((industry) => (
              <div key={industry} className="bg-slate-800/50 p-6 border border-red-600/30 text-center">
                <p className="text-red-600 font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Our Clients</h2>
          <p className="text-xl text-slate-600 mb-12">
            Trusted by Malaysia's leading power generation, transmission, and distribution companies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center bg-white p-4 rounded border border-gray-200 hover:shadow-lg transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Need Reliable Power Solutions?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Speak with our engineering team today to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
