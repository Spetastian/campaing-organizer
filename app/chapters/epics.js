import {
    CREATE_CHAPTER_REQUEST,
    CHANGE_CHAPTER_NAME_REQUEST,
    FETCH_CHAPTER_REQUEST,
    FETCH_CHAPTER_LIST_REQUEST,
    createChapterSuccess,
    createChapterFailure,
    changeChapterNameSuccess,
    changeChapterNameFailure,
    fetchChapterSuccess,
    fetchChapterFailure,
    fetchChapterListSuccess,
    fetchChapterListFailure
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

import ChaptersService from '../services/ChaptersService'

const chaptersService = new ChaptersService()

const createChapterRequestEpic = (action$, store) =>
    action$.ofType(CREATE_CHAPTER_REQUEST)
        .mergeMap(action =>  
            chaptersService.saveChapter({chapterTitle: action.chapterTitle})
                .map(updatedChapterList => createChapterSuccess(updatedChapterList))
                .catch(error => {
                    Observable.of(createChapterFailure(error));
                })
        )

const fetchChapterRequestEpic = action$ =>
    action$.ofType(FETCH_CHAPTER_REQUEST)
        .do(console.log)
        .mergeMap(action =>  
            chaptersService.getChapter({ chapterId: action.chapterId })
                .map(chapter => fetchChapterSuccess(chapter))
                .catch(error => {
                    Observable.of(createChapterFailure(error));
                })
        )

const fetchChapterListRequestEpic = action$ =>
    action$.ofType(FETCH_CHAPTER_LIST_REQUEST)
        .mergeMap(action =>  
            chaptersService.getChapterList()
                .do(console.log)
                .map(chapters => fetchChapterListSuccess(chapters))
                .catch(error => {
                    Observable.of(createChapterListFailure(error));
                })
        )

const changeChapterNameEpic = action$ =>
    action$.ofType(CHANGE_CHAPTER_NAME_REQUEST)
        .debounceTime(200)
        .map(action => changeChapterNameSuccess(action.chapterId, action.newTitle))
        .catch(error => {
            Observable.of(changeChapterNameFailure(error));
        })

export default () => 
    combineEpics(
        fetchChapterListRequestEpic,
        createChapterRequestEpic, 
        fetchChapterRequestEpic, 
        changeChapterNameEpic)

