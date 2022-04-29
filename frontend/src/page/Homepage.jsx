import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidation } from "../schema/form";

import { useDispatch, useSelector } from "react-redux";
import { getActivity, reset } from "../features/reducers/activitySlice";
import { getBreed } from "../features/reducers/breedSlice";

// Import styles and component
import "./homepage.scss";
import { Dog } from "../components";

const Homepage = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const dispatch = useDispatch();

  const { activity } = useSelector((state) => state.activitySlice);
  const { breed } = useSelector((state) => state.breedSlice);

  const handleFetchBreed = () => {
    let formVal = getValues();
    dispatch(getBreed(formVal));
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
          <p>{breed && breed.code && breed.message}</p>
          <Dog
            dogbreed={breed && breed.message}
            randomActivity={activity && activity.activity}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
