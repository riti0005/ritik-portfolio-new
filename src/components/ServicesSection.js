import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Web Development', description: 'Build responsive and dynamic websites using modern technologies.' },
  { title: 'UI/UX Design', description: 'Design intuitive and engaging user interfaces with a focus on user experience.' },
  { title: 'Consulting', description: 'Offer expert advice on how to improve digital strategies and workflows.' },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="section-heading">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
