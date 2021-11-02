import * as t from "../types";
import {placesServices} from '../services/places.services'



function getPlaces(name){
  console.log('getPlaces')
  return(dispatch) =>{
    placesServices.getPlaces().then(
      (response) => {
        dispatch(success(response));
      }
    )

  }

  function success(payload) {
    return { type: t.GET_PLACES_SUCCESS, payload };
  }

  function failure() {
    return { type: t.GET_PLACES_FAILURE };
  }
}


export const placesActions = {
  getPlaces
}