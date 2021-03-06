import { combineReducers } from "redux"
import placesReducer from "./places.reducer"

const rootReducer = combineReducers({
  placesReducer: placesReducer
})

export default rootReducer;