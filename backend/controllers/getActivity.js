import axios from "axios";

// An async function to fetch the third party api that returns a response data or an error nessage
const getActivity = async (ctx, data) => {
  try {
    const activity = await axios.get(
      "https://www.boredapi.com/api/activity",
      data
    );
    ctx.body = activity.data;
  } catch (error) {
    ctx.body = error.data;
  }
};

export default getActivity;
