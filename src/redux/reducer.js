import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  FILTER,
  ORDER,
} from "./actions";

const initialState = {
  myFavorites: [],
  characters: [],
  allFavorites: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allFavorites: [...state.allFavorites, action.payload],
        myFavorites: state.allFavorites,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        allFavorites: state.allFavorites.filter((elem) => elem.id !== action.payload),
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
        allFavorites: state.allFavorites.filter((elem) => elem.id !== action.payload),
        myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload),
      };
    case FILTER:
      const allFav = [...state.allFavorites.filter((elem) => elem.gender === action.payload)];
      return {
        ...state,
        myFavorites: allFav,
      };
    case ORDER:
      const myOrder = [...state.myFavorites];
      if (action.payload === "Ascendente") {
        myOrder.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      }
      if (action.payload === "Descendente") {
        myOrder.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }
      return {
        ...state,
        myFavorites: myOrder,
      };

    default:
      return { ...state }
  }

};

export default rootReducer;
