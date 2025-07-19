import axios from "axios";

const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,latlng,population,capital";

export const getAllCountries = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Erreur API REST(tsy azo !!!)", err);
    throw err;
  }
};
