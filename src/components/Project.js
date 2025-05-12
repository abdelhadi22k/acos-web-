import React, { useState } from "react";
import { Image } from "react-bootstrap";
import LoadingProject from "./loading/LoadingProject";

const itemsPerPage = 2;

const Project = ({ project }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return ( 
    <div>
      <div className="ProjectContainer">
        {currentItems.length !== 0 ? (
          currentItems.map((element) => {
            return (
              <div key={element.id} className="mb-2">
                <div className="projectBox">
                  <Image
                    className="projectImg"
                    src={element.projectImg}
                    alt={element.title}
                    fluid
                  />

                  <div className="projectInfo">
                    <div>
                      {element.tags.map((tag, index) => {
                        return (
                          <span key={index} className="mainBtn1">
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    <h1 className="Project_h1">{element.title}</h1>

                    <p className="Project_p"> {element.description} </p>

                    <a
                      target="blank"
                      href={element.projectLink}
                      className="bb11"
                    >
                      {" "}
                      Shew More{" "}
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <LoadingProject />
        )}
      </div>


      <div className="totalPages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="PagesButton"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      
    </div>
  );
};

export default Project;
