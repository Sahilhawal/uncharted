import * as t from "../types";

const placesReducer = (state = {places: []}, action) => {
  switch(action.type){
    case t.GET_PLACES_SUCCESS:
      return { 
        ...state,
        places: action.payload
      };
      case t.GET_PLACES_FAILURE:
        return { 
          ...state,
          places: action.payload
        };
    default:
      return {...state};
    }
}

export default placesReducer;