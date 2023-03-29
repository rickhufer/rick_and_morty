
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character }
}
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id }
}

export const addCharacter = (id) => {
  const URL = "http://localhost:3001/rickandmorty/onsearch"
  // const URL = "https://be-a-rym.up.railway.app/api";
  // const KEY = "b682d44ea194.e61171acf8c72545c21e";

  return (dispatch) => {
    // return fetch(`${URL}/character/${id}?key=${KEY}`)
    return fetch(`${URL}/${id}`)
      .then(resp => resp.json())
      .then((data) => {
        if (data.name) dispatch({ type: ADD_CHARACTER, payload: data })
        else alert('No hay personajes con ese ID');
      }
      )
  }
}

export const removeCharacter = (id) => {
  return { type: REMOVE_CHARACTER, payload: id }
}
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender }
}
export const orderCards = (id) => {
  return { type: ORDER, payload: id }
}