import { combineReducers } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import breedSlice from "./breedSlice";

export default combineReducers({ activitySlice, breedSlice });
