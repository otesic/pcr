import axios from "axios";

export const getPoke = async (offset: number = 0) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
  );
  console.log(data.results);

  return data;
};
