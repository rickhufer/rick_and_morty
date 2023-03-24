import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
} from "./actions";

const initialState = {
  myFavorites: [],
  characters: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload),
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((elem) => elem.id !== action.payload),
        myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload),
      };

    default:
      return { ...state }
  }

};

export default rootReducer;
