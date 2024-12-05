import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutMeSection from '../components/Aboutme';
import ServicesSection from '../components/ServicesSection';
import ContactCard from '../components/ContactCard';
import projects from '../data/projectData'; 
import skills from '../data/skillsData'; 
import testimonials from '../data/testimonialsData'; 

const Home = () => {

  const featuredProjects = projects.slice(0, 3);
  const newskills = skills.slice(0,3);
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection/>
      <SkillsSection skills={newskills} />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <TestimonialsSection testimonials={testimonials} />
  
      <ContactCard/>

    </div>
  );
};

export default Home;
