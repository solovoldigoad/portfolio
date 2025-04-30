
import React from 'react';
import BigText from '@/components/ui/BigText';

const Projects = () => {
  const projects = [
    { name: 'STUDIO', year: '2011', isOutline: true },
    { name: 'MEGA', year: '2013', isOutline: true },
    { name: 'THE', year: '2015' },
    { name: 'BRIGADE', year: '2017' },
    { name: 'PUSH', year: '2019' },
    { name: 'ONYX', year: '2021' },
  ];

  return (
    <div className="relative flex flex-col items-end space-y-4 md:space-y-0">
      <div className="flex flex-col items-end">
        {projects.map((project, index) => (
          <BigText 
            key={index} 
            text={project.name} 
            year={project.year} 
            isOutline={project.isOutline}
            className="transform hover:translate-x-[-20px] transition-transform duration-500 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;