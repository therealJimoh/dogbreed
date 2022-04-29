import axios from "axios";

const getBreed = async (ctx, next) => {
  try {
    const breed = ctx.request.body.breed;
    console.log(breed);
    const dogBreed = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    if (dogBreed) {
      ctx.status = 200;
      let result = dogBreed.data;
      ctx.response.body = result;
    }
  } catch (error) {
    ctx.response.body = error.response.data;
  }
};

export default getBreed;
