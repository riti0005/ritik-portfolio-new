import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className="container">
      <h2 className="section-heading">Projects</h2>
      <div className="row">
        {featuredProjects.map((project) => (
          <div className="col" key={project.id}>
            <div className="project-card">
              <div className="image-container">
                <img
                  src={project.image}
                  className="card-img-top text-white"
                  alt={project.title}
                />
              </div>
              <header className="card-header">
                <h5>{project.title}</h5>
              </header>
              <div className="card-body">
                <p>{project.description}</p>
              </div>
              <footer className="card-footer">
                <Link to={project.link} className="btn-gradient">
                  View Project
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
