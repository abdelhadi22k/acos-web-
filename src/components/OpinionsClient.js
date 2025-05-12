import React from "react";
import Rating from "./Rating";

const OpinionsClient = ({ opinionClient }) => {
  return (
    <div className="opinionBox">
      <div className="opinion_Container">
        <p className="opinion_paragraph">{opinionClient.opinion}</p>
        <div className="opinionTitle opinion_rating">
          <div>
            <h4>{opinionClient.clientName}</h4>
          </div>
          <div className="line"></div>
          <div className="">
            <Rating rating={opinionClient.ratings} />
            <span>{opinionClient.JobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsClient;
