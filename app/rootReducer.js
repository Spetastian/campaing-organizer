import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { chaptersReducer } from './chapters'
import { charactersReducer } from './characters'
import { locationsReducer } from './locations'

const rootReducer = combineReducers({
  chapters: chaptersReducer,
  characters: charactersReducer,
  locations: locationsReducer,
  routing: routerReducer,
})

export default rootReducer