import React from 'react';
import { useParams } from 'react-router-dom';
import './detailspage.css';
import FeaturedProjects from '../components/FeaturedProjects';
import projects from '../data/projectData'; 

const ProjectDetailPage = () => {
  const { projectSlug } = useParams(); 

  
  const project = projects.find((project) => 
    project.link.split('/')[2] === projectSlug
  );

  return (
    <div className="project-detail-container">
      <h1>Project Details</h1>
      {project ? (
        <div className="project-detail-card">
          <div className="project-detail-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="project-detail-image"
          />
        </div>
      ) : (
        <p className="project-not-found">Project not found.</p>
      )}

     
      <div >
        <FeaturedProjects featuredProjects={projects} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
