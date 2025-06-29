import React, { useState, useEffect } from 'react';
import WorkNav from '../components/WorkNav';
import WorkCard from '../components/WorkCard';
import VideoPage from '../pages/VideoPage';
import projects from '../data/projects';
import { Outlet } from 'react-router-dom';
import './WorkPage.css';





function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  if (selectedCategory === "videos") {
    return (
      <>
        <Outlet context={{
          topbox: <WorkNav onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
        }} />
        <VideoPage />
      </>
    );
  }

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
    <Outlet context={{topbox: <WorkNav onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />}} />
      <div className="work">
        {filteredProjects.map((project) => (
          <WorkCard key={project.link} project={project} />
        ))}
      </div>
    </>
  );
}

export default WorkPage;


