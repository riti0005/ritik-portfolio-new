import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skills }) => {
  const [progressWidth, setProgressWidth] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const initialProgress = skills.reduce((acc, skill) => {
      acc[skill.name] = skill.percent;
      return acc;
    }, {});
    setProgressWidth(initialProgress);
  }, [skills]);

  const handleMouseEnter = (skillName) => {
    setProgressWidth((prev) => ({
      ...prev,
      [skillName]: 0, 
    }));

    setTimeout(() => {
      setProgressWidth((prev) => ({
        ...prev,
        [skillName]: skills.find(skill => skill.name === skillName).percent,
      }));
    }, 100); 
  };

  const handleMouseLeave = () => {};

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSkills = skills.filter((skill) => {
    return (
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.percent.toString().includes(searchTerm)
    );
  });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 section-heading">My Skills</h2>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search skills..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="row">
        {filteredSkills.map((skill) => {
          const skillWidth = progressWidth[skill.name] || skill.percent; 

          return (
            <div key={skill.name} className="col-md-6 col-sm-12 mb-4">
              <div
                className="skill-card p-3 shadow-lg"
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="skill-name mb-0 text-center">{skill.name}</h5>
                  <span className="skill-percentage">{skill.percent}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${skillWidth}%`,
                      transition: 'width 0.5s ease-in-out', 
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
