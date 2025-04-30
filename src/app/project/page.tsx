
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';


const Index = () => {
  return (
    <div className="min-h-screen bg-studio-purple overflow-hidden">
      <div className="container mx-auto px-4">
        <Navbar />
        
        <div className="flex flex-col md:flex-row justify-between mt-12 md:mt-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-sm opacity-70 mb-2">Selected Work</div>
          </div>
          
          <div className="md:w-3/5">
            <Projects />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mt-16 md:mt-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <span className="text-sm mr-2 opacity-70">Portland Oregon</span>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex justify-between items-start">
              <div className="text-right">
                <div className="text-sm opacity-70">design</div>
                <div>feint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;