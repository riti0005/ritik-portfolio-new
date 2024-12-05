import React from 'react';
import SkillsSection from './SkillsSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = ({ skills, backgroundText, hobbiesText, visionText }) => {
  return (
    <div className="about-container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center container">
          <h1 className="display-4 section-heading animate__animated animate__fadeInUp">About Me</h1>
          <p className="lead text-white subtitle animate__animated animate__fadeInUp">
            Hi there! I'm a passionate and driven web developer with a deep commitment to crafting high-quality, user-centric digital experiences. With a solid foundation in front-end development, I specialize in creating intuitive user interfaces, building responsive designs, and optimizing performance to deliver seamless, engaging websites that meet users' needs.
          </p>
          <hr className="separator animate__animated animate__fadeInUp" />
        </div>
      </div>
      <section >
            <SkillsSection skills={skills} />
      
      </section>
    </div>
  );
};

export default About;
