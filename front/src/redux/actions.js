import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";

// export const ADD_CHARACTER = "ADD_CHARACTER";
// export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export const addFavorite = (character) => {
  axios.post(`http://localhost:3001/rickandmorty/fav/`, character)
  return { type: ADD_FAVORITE, payload: character }
}
export const removeFavorite = (id) => {                            // async await
  axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
  return { type: REMOVE_FAVORITE, payload: id }
}

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender }
}
export const orderCards = (id) => {
  return { type: ORDER, payload: id }
}

export const getFavorites = () => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/rickandmorty/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};