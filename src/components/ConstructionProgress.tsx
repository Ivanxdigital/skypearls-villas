import React from 'react';
import { CheckCircle, Clock, CircleDot } from 'lucide-react';

// Define phase data structure
interface Phase {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  completion: number;
}

export const ConstructionProgress = () => {
  // Construction phases data
  const phases: Phase[] = [
    {
      id: 1,
      name: "Land Acquisition",
      description: "Purchase of premium beachfront property and permit processing",
      startDate: "Jan 2024",
      endDate: "Mar 2024",
      status: "completed",
      completion: 100
    },
    {
      id: 2,
      name: "Foundation & Structure",
      description: "Concrete foundation and steel framework construction",
      startDate: "Apr 2024",
      endDate: "Aug 2024",
      status: "in-progress",
      completion: 75
    },
    {
      id: 3,
      name: "Electrical & Plumbing",
      description: "Smart home wiring and eco-friendly water systems",
      startDate: "Sep 2024",
      endDate: "Dec 2024",
      status: "upcoming",
      completion: 0
    },
    {
      id: 4,
      name: "Interior Finishing",
      description: "Premium materials and custom interior design",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      status: "upcoming",
      completion: 0
    },
    {
      id: 5,
      name: "Landscaping & Handover",
      description: "Tropical gardens, pool completion, and property handover",
      startDate: "May 2025",
      endDate: "Jul 2025",
      status: "upcoming",
      completion: 0
    }
  ];

  // Function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-teal" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-sand animate-pulse" />;
      default:
        return <CircleDot className="w-6 h-6 text-gray-500" />;
    }
  };

  // Calculate overall project completion
  const overallCompletion = Math.round(
    phases.reduce((acc, phase) => acc + (phase.completion / phases.length), 0)
  );

  return (
    <section id="construction-progress" className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Construction <span className="text-sand">Roadmap</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track our construction timeline with estimated completion in July 2025.
            Currently at <span className="text-sand font-semibold">{overallCompletion}% overall completion</span>.
          </p>
        </div>
        
        {/* Overall progress bar */}
        <div className="w-full h-3 bg-gray-800 rounded-full mb-10 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal to-sand" 
            style={{ width: `${overallCompletion}%` }}
          ></div>
        </div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />

          {/* Phases */}
          {phases.map((phase, index) => (
            <div key={phase.id} className={`flex flex-col md:flex-row mb-8 md:mb-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Phase card */}
              <div className="md:w-5/12 p-4">
                <div 
                  className={`rounded-xl p-6 h-full shadow-lg border transition-all duration-300
                    ${phase.status === 'completed' 
                      ? 'bg-charcoal/60 border-teal/40' 
                      : phase.status === 'in-progress'
                        ? 'bg-charcoal/60 border-sand/40 shadow-sand/10' 
                        : 'bg-charcoal/40 border-gray-700'}
                  `}
                >
                  <div className="flex items-center mb-3">
                    <div className={`rounded-full p-1 mr-3
                      ${phase.status === 'completed' ? 'bg-teal/20' : 
                        phase.status === 'in-progress' ? 'bg-sand/20' : 'bg-gray-800'}`}
                    >
                      {getStatusIcon(phase.status)}
                    </div>
                    <h3 className={`text-xl font-semibold
                      ${phase.status === 'completed' ? 'text-teal' : 
                        phase.status === 'in-progress' ? 'text-sand' : 'text-white'}`}
                    >
                      {phase.name}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-400">{phase.startDate} - {phase.endDate}</div>
                    <div className={`px-3 py-1 rounded-full font-medium text-xs
                      ${phase.status === 'completed' ? 'bg-teal/20 text-teal' : 
                        phase.status === 'in-progress' ? 'bg-sand/20 text-sand' : 'bg-gray-800 text-gray-400'}`}
                    >
                      {phase.status === 'completed' ? 'Completed' : 
                        phase.status === 'in-progress' ? `In Progress (${phase.completion}%)` : 'Upcoming'}
                    </div>
                  </div>

                  {/* Progress bar for in-progress phases */}
                  {phase.status === 'in-progress' && (
                    <div className="w-full h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden">
                      <div 
                        className="h-full bg-sand" 
                        style={{ width: `${phase.completion}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline dot - visible on desktop only */}
              <div className="hidden md:flex md:w-2/12 justify-center items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                  ${phase.status === 'completed' ? 'bg-teal text-white' : 
                    phase.status === 'in-progress' ? 'bg-sand text-charcoal' : 'bg-gray-700 text-white'}`}
                >
                  {phase.id}
                </div>
              </div>

              {/* Empty space on alternate sides */}
              <div className="md:w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Investment call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-charcoal/80 to-charcoal/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Secure Your Investment Today</h3>
            <p className="text-gray-300 mb-6">
              Early investors benefit from pre-completion pricing and priority unit selection.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-teal to-sand text-charcoal font-medium rounded-lg hover:opacity-90 transition-opacity">
              Request Investment Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 