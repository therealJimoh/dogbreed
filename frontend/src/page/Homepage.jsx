import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidation } from "../schema/form";

import { useDispatch, useSelector } from "react-redux";
import { getActivity, reset } from "../features/reducers/activitySlice";

// Import styles and component
import "./homepage.scss";
import { Dog } from "../components";

const Homepage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const dispatch = useDispatch();

  const { activity } = useSelector((state) => state.activitySlice);

  const handleFetchBreed = () => {
    dispatch(reset());
    dispatch(getActivity());
  };

  return (
    <div className="homepage-contianer">
      <div className="homepage-wrapper">
        <div className="homepage-header">
          <h1>Bored Dog</h1>
          <p>Get a dog and something to do</p>
        </div>
        <div className="homepage-form">
          <h3>Insert a Dog Breed in The Input</h3>
          <form onSubmit={handleSubmit(handleFetchBreed)}>
            <input
              type="text"
              name="breed"
              placeholder="Enter a dog breed"
              {...register("breed", { required: true })}
            />
            <button type="submit">Fetch</button>
            <p className="errors">{errors.breed?.message}</p>
          </form>
        </div>
        <div className="form-result">
          <Dog
            dogbreed="https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg"
            randomActivity={activity && activity.activity}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
