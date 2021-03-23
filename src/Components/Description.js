import React from "react";

const Description = ({ match, selectedMovie }) => {
  return (
    <div className="description">
      <h1>Movie Description</h1>
      <div className="trailer-container">{selectedMovie.trailer}</div>
      <div className="overview-container">
        <h5
          style={{
            paddingLeft: "2rem",
            paddingTop: "3rem",
            marginBottom: "-1rem",
          }}
        >
          Overview:
        </h5>
        <h6 className="description-overview">{selectedMovie.overview}</h6>
      </div>
    </div>
  );
};

export default Description;
