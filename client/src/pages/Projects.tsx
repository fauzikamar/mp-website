import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsCarousel from '@/components/ProjectsCarousel';

export default function Projects() {
  const allProjects = [
    { id: 1, title: 'Oil Filtration Works - Contractual Service', duration: '2019-2023 (4 years)', scope: 'Oil Filtration Works within Peninsular Malaysia and East Malaysia', client: 'MTM-TNB', category: 'Maintenance Services' },
    { id: 2, title: '45MVA Transformer Installation - Multiple Locations', scope: 'Installation of 3 units 45MVA 132/33kV ABB Transformers', locations: 'LSS Kuala Muda, LSS Machang, PMU Chendering', client: 'MN Power', category: 'Installation & Commissioning' },
    { id: 3, title: '130MVA Transformer Installation', scope: 'Installation of 1 unit 130MVA 132/33kV Daihen Transformer', location: 'LSS Sg Kerian, Perak', client: 'MN Power', category: 'Installation & Commissioning' },
    { id: 4, title: 'Oil Filtration Works - Contractual Service', duration: '2017-2019 (2 years)', scope: 'Oil Filtration Works within Peninsular Malaysia and East Malaysia', client: 'MTM-TNB', category: 'Maintenance Services' },
    { id: 5, title: 'Oil Filtration Works - Contractual Service', duration: '2015-2017 (2 years)', scope: 'Oil Filtration Works within Peninsular Malaysia and East Malaysia', client: 'MTM-TNB', category: 'Maintenance Services' },
    { id: 6, title: 'TNB Pasir Gudang Power Plant - Substation Design & Build', scope: 'Design and build 2x500kVA 22/0.415kV electrical substation, 275kV & 132kV switchyard, street lighting, DC supply & 6.6kV power supply', location: 'TNB Pasir Gudang Power Plant', client: 'TNB Remaco – TNB Generation', category: 'Power Solutions' },
    { id: 7, title: 'Robinson Falls Power Plant - Transformer Supply & Commissioning', scope: 'Supply, install, testing and commissioning 3 units Step-up and 1 unit Step-down Transformer', location: '2MW Robinson Falls Power Plant, Cameron Highland, Pahang', client: 'TNB Generation', category: 'Power Solutions' },
    { id: 8, title: 'Pergau Power Plant - Auxiliary Transformer Installation', scope: 'Supply, install, testing and commissioning 1 unit 630kVA 11/0.520kV Auxiliary Transformer', location: 'Pergau Power Plant, Kelantan', client: 'TNB Generation', category: 'Installation & Commissioning' },
    { id: 9, title: 'Gelugor Power Plant - Auxiliary Transformer Supply', scope: 'Supply of 1 unit 750kVA 11/0.520kV Auxiliary Transformer', location: 'Gelugor Power Plant, Penang', client: 'TNB Generation', category: 'Power Solutions' },
    { id: 10, title: 'Petronas Transformer Refurbishment', scope: 'Refurbishment and drying work on 1 unit 30MVA 33/11kV transformer inclusive Factory Acceptance Test', client: 'TNB Remaco – Petronas', category: 'Maintenance Services' },
    { id: 11, title: '90MVA Transformer Installation - Multiple TNB Substations', scope: 'Installation, testing and commissioning of 4 Units 90MVA 132/33kV CG Power Transformers', locations: 'Various TNB Main Substations', client: 'Novasuntara & TSG', category: 'Installation & Commissioning' },
    { id: 12, title: '240MVA Ultra-High Capacity Transformer Installation', scope: 'Installation, testing and commissioning of 1 Unit 240MVA 275/132kV CG Power Transformer', location: 'TNB Main Substation Kangkar Tebrau, Johor', client: 'TSG', category: 'Installation & Commissioning' },
    { id: 13, title: 'Cable Box Repair - Contractual Service', duration: '2018', scope: 'Repair polybutene oil leak 11kV & 33kV Cable Box (Oil type) for 30MVA 132/11kV and 45 & 90MVA 132/33kV Transformers', locations: 'Various TNB Main Substations (AM Kuala Lumpur State)', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 14, title: 'Cable Box Repair - Contractual Service', duration: '2017', scope: 'Repair polybutene oil leak 11kV & 33kV Cable Box (Oil type) for 30MVA 132/11kV and 45MVA & 90MVA 132/33kV Transformers', locations: 'Various TNB Main Substations (AM Kuala Lumpur State)', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 15, title: 'Transformer Refurbishment - Contractual Service', duration: '2017', scope: 'Refurbishment work at site for 2 units 30MVA 132/11kV, 2 units 90MVA 132/33kV', locations: 'Various TNB main stations (AM Selangor State)', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 16, title: 'Transformer Refurbishment - Contractual Service', duration: '2017', scope: 'Refurbishment work for 4 units 90MVA 132/33kV and 3 units 45MVA 132/33kV', locations: 'Various TNB main stations (AM Kuala Lumpur State)', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 17, title: 'Port Dickson Power Plant - 325MVA Step-up Transformer', scope: 'Supply, Design, Build, Re-engineering and Relocate work for 1 unit 325MVA 11/275kV Step-up (spare) and 1 Unit 50MVA 295/11kV BEST transformer', locations: 'Port Dickson Power Plant, Negeri Sembilan and Kenering Power Plant, Perak', client: 'PTIS Engineering-TNB Remaco', category: 'Power Solutions' },
    { id: 18, title: 'Port Dickson Power Plant - 325MVA Installation', scope: 'Installation, testing and commissioning of 1 Units of 325MVA 11/275kV Step-up (Spare) BEST Transformer', location: '800MW Port Dickson Power Plant, Negeri Sembilan', client: 'PTIS Engineering-TNB Remaco', category: 'Installation & Commissioning' },
    { id: 19, title: 'Cenderoh Power Plant - Step-up Transformer Installation', scope: 'Installation, Testing and commissioning of 1 Units of 15MVA 11/132kV Step-up (Spare) ABB Transformer', location: 'Cenderoh Power Plant, Perak', client: 'TNB Remaco', category: 'Installation & Commissioning' },
    { id: 20, title: 'Port Dickson Power Plant - Valve Modification', scope: 'Modification, replace and install of 6 units Big Valves Various Size inclusive FE TA during installation work for 308MVA 11/275kV step-up FE Transformer', location: 'Port Dickson Power Plant', client: 'TNB Remaco', category: 'Maintenance Services' },
    { id: 21, title: 'Kota Kinabalu Power Station - Transformer Refurbishment', scope: 'Refurbishment work at site for 1 unit 30MVA 11/132kV Step-Up Transformer', location: 'Kota Kinabalu Power Station, Sabah', client: 'Ranhill Powertron', category: 'Maintenance Services' },
    { id: 22, title: '45MVA XD Transformer Installation', scope: 'Installation, Testing and commissioning of 2 Units of 45MVA 132/33kV XD Transformer', location: 'TNB Main Station, Kandis Kelantan', client: 'Toshiba', category: 'Installation & Commissioning' },
    { id: 23, title: 'Puncak Niaga Water Treatment - Transformer Installation', scope: 'Installation, Testing and Commissioning of 1 unit 8MVA 33/6.6kV', location: 'Puncak Niaga Water Treatment, Bestari Jaya, Selangor', client: 'HHI Power', category: 'Installation & Commissioning' },
    { id: 24, title: 'KEV Power Plant - Conservator Tank Modification', scope: 'Modification works on 1 unit 8MVA 11/6.6kV Conservator Tank and Filtration Work', location: 'KEV Power Plant, Kapar, Selangor', client: 'MTM-KEV', category: 'Maintenance Services' },
    { id: 25, title: 'Panglima Power Plant - Tap Changer Replacement', scope: 'Replacement work of 1 unit Off Load Tap Changer onto 8MVA 11/6.6kV (T1)', location: 'Panglima Power Plant, Melaka', client: 'ANPEC-SIEMENS', category: 'Maintenance Services' },
    { id: 26, title: 'Puncak Niaga Water Treatment - Transformer Installation', scope: 'Installation, Testing and Commissioning of 1 unit 8MVA 33/6.6kV', location: 'Puncak Niaga Water Treatment, Bestari Jaya, Selangor', client: 'HHI Power', category: 'Installation & Commissioning' },
    { id: 27, title: 'Bukit Tarek Substation - Core Earthing Replacement', scope: 'Oil handling, Inspection inside transformer and Replacement of 2 Units Core Earthing onto 1 unit 240MVA 500/275kV Hyundai Single Phase Transformer', location: 'TNB Main Station Bukit Tarek, Selangor', client: 'HHI Power', category: 'Maintenance Services' },
    { id: 28, title: 'Transformer Refurbishment - Contractual Service', duration: '2014', scope: 'Refurbishment work onto 7.5MVA, 15MVA, 30MVA 33/11kV', locations: 'Various TNB Main Stations - Distribution', client: 'MTM', category: 'Maintenance Services' },
    { id: 29, title: 'Cable Installation - Contractual Service', duration: '2014', scope: 'Laying, termination cables 33kV, 11kV and 415V', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 30, title: 'Transformer Refurbishment - Contractual Service', duration: '2013', scope: 'Refurbishment work onto 7.5MVA, 15MVA, 30MVA 33/11kV', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Maintenance Services' },
    { id: 31, title: 'Cable Installation - Contractual Service', duration: '2013', scope: 'Laying, termination cables 33kV, 11kV and 415V', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 32, title: 'Transformer Refurbishment - Contractual Service', duration: '2012', scope: 'Refurbishment work onto 7.5MVA, 15MVA, 30MVA 33/11kV', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Maintenance Services' },
    { id: 33, title: 'Cable Installation - Contractual Service', duration: '2012', scope: 'Laying, termination cables 33kV, 11kV and 415V', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 34, title: 'Zanwa Transformer Factory - Top Cover Welding', scope: 'De-welding and Welding top cover of 1 unit 90MVA 132/33kV and 2 units 15MVA 132/11kV', location: 'Zanwa Transformer Factory', client: 'Zanwa – TNB Transmission', category: 'Maintenance Services' },
    { id: 35, title: 'PMU Kalumpang - Oil Filtration Work', scope: 'Oil Filtration work onto 2 unit of 45MVA 132/33kV', location: 'PMU Kalumpang, Selangor', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 36, title: '60MVA Transformer Installation - Pasir Gudang', scope: 'Installation, Testing and Commissioning of 2 unit 60MVA 132/22kV ABB Transformer', location: 'TNB Main Station Pasir Gudang, Johor', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 37, title: 'PMU Kalumpang - Oil Filtration Work', scope: 'Oil Filtration work onto 2 unit of 45MVA 132/33kV', location: 'PMU Kalumpang, Selangor', client: 'TNB Transmission', category: 'Maintenance Services' },
    { id: 38, title: 'Cable Box Welding Work', scope: 'Welding work onto 132kV Cable Box of 240MVA 275/132kV transformer', client: 'ANPEC - MTM', category: 'Maintenance Services' },
    { id: 39, title: 'SJ Kenering - Tank De-welding', scope: 'De-welding bottom tank of 1 unit 50MVA 11/295kV Transformer', location: 'SJ Kenering', client: 'TNB Remaco', category: 'Maintenance Services' },
    { id: 40, title: 'SJ Temenggor - Transformer Refurbishment', scope: 'Refurbishment works onto 108MVA 11/295kV GT2 and 1MVA 11/0.415 ST2', location: 'SJ Temenggor, Perak', client: 'TNB Remaco', category: 'Maintenance Services' },
    { id: 41, title: 'SJ Panglima - Generator Transformer Rectification', scope: 'Rectification work onto 148MVA 11/295kV Generator Transformer', location: 'SJ Panglima, Melaka', client: 'ESI - Powertek', category: 'Maintenance Services' },
    { id: 42, title: 'SJ Paka - Generator Transformer Top Cover Welding', scope: 'Welding top cover of 24MVA 11/132kV Generator Transformer', location: 'SJ Paka, Terengganu', client: 'ANPEC-TNB Remaco', category: 'Maintenance Services' },
    { id: 43, title: 'Elpion Silicon Factory - Furnace Transformer', scope: 'Servicing, Installation and Testing of 1 unit 5MVA 33/0.14kV Furnace Transformer', location: 'Elpion Silicon Factory', client: 'Elpion Silicon', category: 'Installation & Commissioning' },
    { id: 44, title: 'SJ Paka - Radiator Refurbishment', scope: 'Refurbishment works onto 19 units of radiators of GT4B', location: 'SJ Paka', client: 'TNB Remaco', category: 'Maintenance Services' },
    { id: 45, title: 'PMU Kg Chempaka & Kota Kemuning - Manpower Support', scope: 'Supply of manpower to assist refurbishment work onto 90MVA 132/33kV', locations: 'PMU Kg Chempaka and Kota Kemuning', client: 'ANPEC – TNBT AM Sel', category: 'Maintenance Services' },
    { id: 46, title: 'SJ Putrajaya - Manpower Support', scope: 'Supply of manpower to assist refurbishment work onto 108MVA 11/275kV Generator Transformer', location: 'SJ Putrajaya', client: 'ANPEC-TNB Remaco', category: 'Maintenance Services' },
    { id: 47, title: 'SJ Paka - Leak Repair Support', scope: 'Supply of manpower to assist repair leak onto Auxiliary and Generator transformer', location: 'SJ Paka', client: 'ANPEC-TNB Remaco', category: 'Maintenance Services' },
    { id: 48, title: 'SJ Paka - Radiator Refurbishment', scope: 'Refurbishment work onto 4 units of radiators of GT4C', location: 'SJ Paka', client: 'TNB Remaco', category: 'Maintenance Services' },
    { id: 49, title: 'PPU North Port - Top Cover Welding', scope: 'Welding top cover onto 8MVA 33/11kV', location: 'PPU North Port', client: 'ANPEC – North Port', category: 'Maintenance Services' },
    { id: 50, title: 'PMU Kapar & Bukit Tarek - Oil Handling Support', scope: 'Assist oil handling works for 500kV bushings replacement', locations: 'PMU Kapar & Bukit Tarek, Selangor', client: 'ANPEC-TNBT AMSEL', category: 'Maintenance Services' },
    { id: 51, title: '60MVA Transformer Installation - Pasir Gudang', scope: 'Installation, Testing and Commissioning of 2 unit 60MVA 132/22kV ABB Transformer', location: 'TNB Main Station Pasir Gudang, Johor', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 52, title: 'Transformer Refurbishment - Contractual Service', duration: '2011', scope: 'Refurbishment work onto 7.5MVA, 15MVA, 30MVA 33/11kV', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Maintenance Services' },
    { id: 53, title: 'Cable Installation - Contractual Service', duration: '2011', scope: 'Laying, termination cables 33kV, 11kV and 415V', locations: 'Various TNB Main Stations - Distribution (around Peninsular Malaysia)', client: 'MTM', category: 'Installation & Commissioning' },
    { id: 54, title: 'Port Dickson - 308MVA Step-up Transformer', scope: 'Design, supply, delivery and testing 1 unit 308MVA 11/275kV Step-up Transformer', location: 'SJ Tuanku Jaafar, Port Dickson', client: 'TNB REMACO-TNBG', category: 'Power Solutions' }
  ];

  const featuredProjects = allProjects.slice(0, 6);

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
            <span className="text-[#dc2626]">Projects</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Showcasing our expertise across power generation, transmission, distribution, and maintenance sectors.
          </p>
        </div>
      </section>

      {/* Project Overview - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Project Portfolio</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Magnitude Power Sdn Bhd has successfully delivered 54 major projects across Malaysia's power generation, transmission, and distribution sectors. Our portfolio demonstrates extensive experience in transformer installation, refurbishment, and maintenance services for TNB, power plants, and industrial facilities.
          </p>
        </div>
      </section>

      {/* Featured Projects - Carousel */}
      <section className="section-full section-dark">
        <div className="section-content mb-0 px-0">
          <h2 className="mb-12 text-white px-4">Featured Projects</h2>
          <ProjectsCarousel />
        </div>
      </section>

      {/* All Projects - Scrollable List - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-8 text-slate-900">Complete Project List</h2>
          <div className="bg-white border border-gray-200 rounded p-6">
            <div className="max-h-[700px] overflow-y-auto space-y-4 pr-4">
              {allProjects.map((project) => (
                <div key={project.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{project.id}. {project.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{project.scope}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#1a1a1a] bg-blue-50 px-3 py-1 rounded ml-4 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 mt-3">
                    {(project.location || project.locations) && (
                      <div>
                        <strong className="text-slate-700">Location:</strong> {project.location || project.locations}
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <strong className="text-slate-700">Duration:</strong> {project.duration}
                      </div>
                    )}
                    <div>
                      <strong className="text-slate-700">Client:</strong> {project.client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-slate-500 text-sm">
              Total Projects: {allProjects.length}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content text-center">
          <h2 className="mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electrical engineering, power system, or transformer maintenance requirements.
          </p>
          <a
            href="/contact"
            className="btn-pmx border-white bg-transparent hover:bg-[#dc2626] hover:border-transparent hover:!text-white inline-block focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 hover:shadow-none [&:focus]:outline-none [&:focus-visible]:outline-none"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
