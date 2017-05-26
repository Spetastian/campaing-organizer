import {
    CREATE_CHARACTER_REQUEST,
    CHANGE_CHARACTER_NAME_REQUEST,
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_LIST_REQUEST,
    createCharacterSuccess,
    createCharacterFailure,
    changeCharacterNameSuccess,
    changeCharacterNameFailure,
    fetchCharacterSuccess,
    fetchCharacterFailure,
    fetchCharacterListSuccess,
    fetchCharacterListFailure
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

import CharactersService from '../services/CharactersService'

const service = new CharactersService()

const createCharacterRequestEpic = (action$, store) =>
    action$.ofType(CREATE_CHARACTER_REQUEST)
        .mergeMap(action =>  
            service.saveCharacter({chapterTitle: action.chapterTitle})
                .map(updatedCharacterList => createCharacterSuccess(updatedCharacterList))
                .catch(error => {
                    Observable.of(createCharacterFailure(error));
                })
        )

const fetchCharacterRequestEpic = action$ =>
    action$.ofType(FETCH_CHARACTER_REQUEST)
        .mergeMap(action =>  
            service.getCharacter({ chapterId: action.chapterId })
                .map(chapter => fetchCharacterSuccess(chapter))
                .catch(error => {
                    Observable.of(createCharacterFailure(error));
                })
        )

const fetchCharacterListRequestEpic = action$ =>
    action$.ofType(FETCH_CHARACTER_LIST_REQUEST)
        .mergeMap(action =>  
            service.getCharacterList()
                .do(console.log)
                .map(chapters => fetchCharacterListSuccess(chapters))
                .catch(error => {
                    Observable.of(createCharacterListFailure(error));
                })
        )

const changeCharacterNameEpic = action$ =>
    action$.ofType(CHANGE_CHARACTER_NAME_REQUEST)
        .debounceTime(200)
        .map(action => changeCharacterNameSuccess(action.chapterId, action.newTitle))
        .catch(error => {
            Observable.of(changeCharacterNameFailure(error));
        })

export default () => 
    combineEpics(
        fetchCharacterListRequestEpic,
        createCharacterRequestEpic, 
        fetchCharacterRequestEpic, 
        changeCharacterNameEpic)

