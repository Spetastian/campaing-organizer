import { combineReducers } from 'redux'
import campaignReducer from './campaign-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  campaign: campaignReducer,
  routing: routerReducer,
})

export default rootReducer