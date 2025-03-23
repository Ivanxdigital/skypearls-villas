import React from 'react';
import { TrendingUp, Users, Building, Palmtree as PalmTree } from 'lucide-react';

export const Investment = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
          Investment <span className="text-sand">Potential</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-teal mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">15%</h3>
            <p className="text-sm sm:text-base text-gray-400">Annual ROI</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">500K+</h3>
            <p className="text-sm sm:text-base text-gray-400">Annual Tourists</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 text-center">
            <Building className="w-6 h-6 sm:w-8 sm:h-8 text-teal mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">25%</h3>
            <p className="text-sm sm:text-base text-gray-400">Property Value Growth</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 text-center">
            <PalmTree className="w-6 h-6 sm:w-8 sm:h-8 text-teal mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">12</h3>
            <p className="text-sm sm:text-base text-gray-400">Premium Units</p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-16 p-4 sm:p-8 rounded-lg bg-charcoal border border-gray-800">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Market Analysis</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Tourism Growth</span>
                <span className="text-teal">92%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div className="h-full w-[92%] bg-teal rounded-full" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Property Demand</span>
                <span className="text-teal">88%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div className="h-full w-[88%] bg-teal rounded-full" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Rental Yield</span>
                <span className="text-teal">85%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div className="h-full w-[85%] bg-teal rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}