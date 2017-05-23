import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
//import createLogger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware(rootEpic)

//const loggerMiddleware = createLogger()

export default function configureStore( /*preloadedState*/ ) {
  return createStore(
    rootReducer,
    //preloadedState,
    composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            //routerBrowserhistoryMiddleware
        //loggerMiddleware
        )
    )
  )
}