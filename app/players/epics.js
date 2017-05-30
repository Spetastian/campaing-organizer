import {
    CREATE_PLAYER_REQUEST,
    CHANGE_PLAYER_NAME_REQUEST,
    FETCH_PLAYER_REQUEST,
    FETCH_PLAYER_LIST_REQUEST,
    createPlayerSuccess,
    createPlayerFailure,
    changePlayerNameSuccess,
    changePlayerNameFailure,
    fetchPlayerSuccess,
    fetchPlayerFailure,
    fetchPlayerListSuccess,
    fetchPlayerListFailure
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

import PlayersService from '../services/PlayersService'

const service = new PlayersService()

const createPlayerRequestEpic = (action$, store) =>
    action$.ofType(CREATE_PLAYER_REQUEST)
        .mergeMap(action =>  
            service.savePlayer({title: action.title})
                .map(updatedPlayerList => createPlayerSuccess(updatedPlayerList))
                .catch(error => {
                    Observable.of(createPlayerFailure(error));
                })
        )

const fetchPlayerRequestEpic = action$ =>
    action$.ofType(FETCH_PLAYER_REQUEST)
        .do(console.log)
        .mergeMap(action =>  
            service.getPlayer({ id: action.id })
                .map(player => fetchPlayerSuccess(player))
                .catch(error => {
                    Observable.of(createPlayerFailure(error));
                })
        )

const fetchPlayerListRequestEpic = action$ =>
    action$.ofType(FETCH_PLAYER_LIST_REQUEST)
        .mergeMap(action =>  
            service.getPlayerList()
                .do(console.log)
                .map(players => fetchPlayerListSuccess(players))
                .catch(error => {
                    Observable.of(createPlayerListFailure(error));
                })
        )

const changePlayerNameEpic = action$ =>
    action$.ofType(CHANGE_PLAYER_NAME_REQUEST)
        .debounceTime(200)
        .map(action => changePlayerNameSuccess(action.id, action.newTitle))
        .catch(error => {
            Observable.of(changePlayerNameFailure(error));
        })

export default () => 
    combineEpics(
        fetchPlayerListRequestEpic,
        createPlayerRequestEpic, 
        fetchPlayerRequestEpic, 
        changePlayerNameEpic)

