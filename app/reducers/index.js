import { combineReducers } from 'redux'
import campaignReducer from './campaign-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer,
  campaign: campaignReducer
})

export default rootReducer