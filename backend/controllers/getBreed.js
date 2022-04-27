import axios from "axios";

const getBreed = async (ctx, data) => {
  try {
    const breed = await axios.get(
      `https://dog.ceo/api/breed/${inputbreed}/images/random`,
      data
    );
    ctx.body = breed.data;
  } catch (error) {
    ctx.body = error.data;
  }
};

export default getBreed;
