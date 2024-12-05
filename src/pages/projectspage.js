import React, { useEffect, useState } from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import projects from '../data/projectData'; 

const ProjectsPage = () => {
  const [projectsList] = useState(projects); 

  useEffect(() => {
    document.title = 'Projects - My Portfolio';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Explore a diverse range of projects that highlight my skills in development, design, and data-driven applications.');
  }, []);

  return (
    <div className="projects-page container mt-5">
    
      <FeaturedProjects featuredProjects={projectsList} />
    </div>
  );
};

export default ProjectsPage;
