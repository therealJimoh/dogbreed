import React from "react";
import "./homepage.scss";
import { Dog } from "../components";

const Homepage = () => {
  return (
    <div className="homepage-contianer">
      <div className="homepage-wrapper">
        <div className="homepage-header">
          <h1>Bored Dog</h1>
          <p>Get a dog and something to do</p>
        </div>
        <div className="homepage-form">
          <h3>Insert a Dog Breed in The Input</h3>
          <form>
            <input type="text" name="breed" placeholder="Enter a dog breed" />
            <button type="submit">Fetch</button>
          </form>
        </div>
        <div className="form-result">
          <Dog
            dogbreed="https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg"
            randomActivity="Play a game of tennis with a friend"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
