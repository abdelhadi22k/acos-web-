import React from "react";


const FullscreenPanel = ({ isOpen, onClose, title, projects }) => {
  return (
    <div className={`fullscreen-panel ${isOpen ? "open" : ""}`}>
      <div className="panel-header">
        <h2>{title}</h2>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="panel-content">
        {projects.map((project) => (
          <div key={project.id} className="panel-card">
            <img src={project.projectImg} alt={project.title} />
            <div className="info">
              <h4>{project.title}</h4>
              <p>{project.category}</p>
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullscreenPanel;
