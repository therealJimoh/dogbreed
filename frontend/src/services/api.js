import axios from "axios";

const activity = async () => {
  const res = await axios.get("http://localhost:3011/api/activity");
  return res.data;
};

const breed = async (formVal) => {
  const res = await axios.post("http://localhost:3011/api/breed", formVal);
  return res.data;
};

const API = { activity, breed };

export default API;
