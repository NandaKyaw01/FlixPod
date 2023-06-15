import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";

const API_KEY = "31370bdd8fc99a1a12ee8a8da8cae936";

export const getMovieList = async (page, param) => {
  const response = await axios.get(
    `${API_URL}${param}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data;
};

export const getMovie = async (id, param) => {
  const response = await axios.get(
    `${API_URL}/${param}/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCast = async (id, param) => {
  const response = await axios.get(
    `${API_URL}/${param}/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

// export const createItem = async (item) => {
//   const response = await axios.post(`${API_URL}/items`, item);
//   return response.data;
// };

// export const updateItem = async (id, item) => {
//   const response = await axios.put(`${API_URL}/items/${id}`, item);
//   return response.data;
// };

// export const deleteItem = async (id) => {
//   const response = await axios.delete(`${API_URL}/items/${id}`);
//   return response.data;
// };

export const movie = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "31370bdd8fc99a1a12ee8a8da8cae936",
  },
});

export const user = axios.create({
  baseURL: "http://localhost:5000/",
});
