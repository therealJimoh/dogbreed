import axios from "axios";

const activity = async (data) => {
  const res = await axios.get("http://localhost:3011/api/activity", data);
  return res.data;
};

const API = { activity };

export default API;
