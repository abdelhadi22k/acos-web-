import React from "react";
import Rating from "./Rating";

const OpinionsClient = ({ opinionClient }) => {
  return (
    <div className="opinionBox">
      <div className="opinionContainer">
        <p className="opinionParagraph">{opinionClient.opinion}</p>
        <div className="opinionTitle opinionRating">
          <div>
            <h4 className="clientName">{opinionClient.clientName}</h4>
          </div>
          <div className="line"></div>
          <div className="ratingInfo">
            <Rating rating={opinionClient.ratings} />
            <span className="jobTitle">{opinionClient.JobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsClient;
