import React from "react";
import "./dog.scss";

const Dog = ({dogbreed, randomActivity}) => {
  return (
    <div className="dog-container">
      <div className="dog-img">
        <img
          src={dogbreed}
          alt="Dog Breed"
        />
      </div>
      <div className="random-activity">
        <h4>A random act of activity for the dog:</h4>
        <p>{randomActivity}</p>
      </div>
    </div>
  );
};

export default Dog;
