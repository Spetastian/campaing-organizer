import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { chaptersReducer } from './chapters'
import { charactersReducer } from './characters'
import { locationsReducer } from './locations'
import { playersReducer } from './players'

const rootReducer = combineReducers({
  chapters: chaptersReducer,
  characters: charactersReducer,
  locations: locationsReducer,
  players: playersReducer,
  routing: routerReducer,
})

export default rootReducer