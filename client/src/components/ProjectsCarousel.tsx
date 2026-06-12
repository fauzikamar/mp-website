import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchProjectsFromGoogleSheet, ProjectData } from '@/lib/googleSheetsFetcher';

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT2dwg6pZFzMIF3T-YMyyXPAJOuMyaNuAp41YXn9i8EAVaWUo5C9GYa-luEMsaXjfdEoP3lsxFHceey/pub?gid=0&single=true&output=csv';

// Sample/Demo data for testing - replace with actual Google Sheet data
const SAMPLE_PROJECTS: ProjectData[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: 'Oil Filtration Works - Contractual Service',
    capacityDetails: 'Oil Filtration Works within Peninsular Malaysia and East Malaysia',
    clientName: 'MTM-TNB',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: '45MVA Transformer Installation - Multiple Locations',
    capacityDetails: 'Installation of 3 units 45MVA 132/33kV ABB Transformers',
    clientName: 'MN Power',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: '130MVA Transformer Installation',
    capacityDetails: 'Installation of 1 unit 130MVA 132/33kV Daihen Transformer',
    clientName: 'MN Power',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: 'TNB Pasir Gudang Power Plant - Substation Design & Build',
    capacityDetails: 'Design and build 2x500kVA 22/0.415kV electrical substation',
    clientName: 'TNB Remaco – TNB Generation',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: 'Robinson Falls Power Plant - Transformer Supply',
    capacityDetails: 'Supply, install, testing and commissioning 3 units Step-up Transformer',
    clientName: 'TNB Generation',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    projectTitle: '240MVA Ultra-High Capacity Transformer Installation',
    capacityDetails: 'Installation of 1 Unit 240MVA 275/132kV CG Power Transformer',
    clientName: 'TSG',
  },
];

interface CarouselState {
  projects: ProjectData[];
  isLoading: boolean;
  error: string | null;
  currentIndex: number;
  isDragging: boolean;
  dragStart: number;
  dragOffset: number;
}

export default function ProjectsCarousel() {
  const [state, setState] = useState<CarouselState>({
    projects: [],
    isLoading: true,
    error: null,
    currentIndex: 0,
    isDragging: false,
    dragStart: 0,
    dragOffset: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch projects from Google Sheet
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        const projects = await fetchProjectsFromGoogleSheet(GOOGLE_SHEET_CSV_URL);

        // If no projects from Google Sheet, use sample data
        if (projects.length === 0) {
          console.log('No projects found in Google Sheet, using sample data for demonstration');
          setState(prev => ({
            ...prev,
            projects: SAMPLE_PROJECTS,
            isLoading: false,
          }));
        } else {
          setState(prev => ({
            ...prev,
            projects,
            isLoading: false,
          }));
        }
      } catch (error) {
        console.log('Failed to load from Google Sheet, using sample data:', error);
        // Use sample data as fallback
        setState(prev => ({
          ...prev,
          projects: SAMPLE_PROJECTS,
          isLoading: false,
        }));
      }
    };

    loadProjects();
  }, []);

  // Navigation is now button-only (no drag/mouse movement)

  const handleNext = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.projects.length,
      dragOffset: 0,
    }));
  }, []);

  const handlePrevious = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.projects.length) % prev.projects.length,
      dragOffset: 0,
    }));
  }, []);

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-500 border-r-amber-500 animate-spin"></div>
          </div>
          <p className="text-slate-300 text-lg font-semibold">Loading projects...</p>
          <p className="text-slate-500 text-sm mt-2">Fetching from Google Sheet</p>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-red-400 text-lg">{state.error}</p>
        </div>
      </div>
    );
  }

  if (state.projects.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-slate-300 text-lg">No projects available</p>
        </div>
      </div>
    );
  }

  const cardWidth = 100 / visibleCards;
  const translateX = -(state.currentIndex * cardWidth);

  return (
    <div className="w-full bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative"
        >
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${translateX}%)`,
              }}
            >
              {state.projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{
                    width: `${cardWidth}%`,
                  }}
                >
                  {/* Card */}
                  <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-700 hover:border-amber-500/50">
                    {/* Image Container */}
                    <div className="relative w-full h-64 bg-slate-800 overflow-hidden">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.projectTitle}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231e293b" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-2">
                              <div className="w-12 h-12 rounded-full bg-amber-500/40" />
                            </div>
                            <p className="text-slate-400 text-sm">No image</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 bg-slate-800/50">
                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">
                        {project.projectTitle}
                      </h3>

                      {/* Capacity Details */}
                      {project.capacityDetails && (
                        <p className="text-sm text-slate-300 mb-3 line-clamp-2">
                          {project.capacityDetails}
                        </p>
                      )}

                      {/* Client Name */}
                      {project.clientName && (
                        <p className="text-sm font-semibold text-amber-400 pt-3 border-t border-slate-700/50 mt-3 pt-3">
                          {project.clientName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {state.projects.length > visibleCards && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Previous projects"
                disabled={state.isDragging}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Next projects"
                disabled={state.isDragging}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Indicators */}
        {state.projects.length > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(state.projects.length / visibleCards) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setState(prev => ({ ...prev, currentIndex: index * visibleCards }))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(state.currentIndex / visibleCards)
                    ? 'bg-amber-500 w-8'
                    : 'bg-slate-600 w-2 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
