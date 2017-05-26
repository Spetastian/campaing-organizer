import {
    CREATE_LOCATION_REQUEST,
    CHANGE_LOCATION_NAME_REQUEST,
    FETCH_LOCATION_REQUEST,
    FETCH_LOCATION_LIST_REQUEST,
    createLocationSuccess,
    createLocationFailure,
    changeLocationNameSuccess,
    changeLocationNameFailure,
    fetchLocationSuccess,
    fetchLocationFailure,
    fetchLocationListSuccess,
    fetchLocationListFailure
} from './actions'

import { push } from 'react-router-redux'
import { combineEpics } from 'redux-observable'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of'

import LocationsService from '../services/LocationsService'

const service = new LocationsService()

const createLocationRequestEpic = (action$, store) =>
    action$.ofType(CREATE_LOCATION_REQUEST)
        .mergeMap(action =>  
            service.saveLocation({title: action.title})
                .map(updatedLocationList => createLocationSuccess(updatedLocationList))
                .catch(error => {
                    Observable.of(createLocationFailure(error));
                })
        )

const fetchLocationRequestEpic = action$ =>
    action$.ofType(FETCH_LOCATION_REQUEST)
        .do(console.log)
        .mergeMap(action =>  
            service.getLocation({ id: action.id })
                .map(location => fetchLocationSuccess(location))
                .catch(error => {
                    Observable.of(createLocationFailure(error));
                })
        )

const fetchLocationListRequestEpic = action$ =>
    action$.ofType(FETCH_LOCATION_LIST_REQUEST)
        .mergeMap(action =>  
            service.getLocationList()
                .do(console.log)
                .map(locations => fetchLocationListSuccess(locations))
                .catch(error => {
                    Observable.of(createLocationListFailure(error));
                })
        )

const changeLocationNameEpic = action$ =>
    action$.ofType(CHANGE_LOCATION_NAME_REQUEST)
        .debounceTime(200)
        .map(action => changeLocationNameSuccess(action.id, action.newTitle))
        .catch(error => {
            Observable.of(changeLocationNameFailure(error));
        })

export default () => 
    combineEpics(
        fetchLocationListRequestEpic,
        createLocationRequestEpic, 
        fetchLocationRequestEpic, 
        changeLocationNameEpic)

