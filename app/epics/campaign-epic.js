import {
    CREATE_CHAPTER_REQUEST,
    CHANGE_CHAPTER_NAME_REQUEST,
    FETCH_CHAPTER_REQUEST
} from '../actions/types'
import {
    createChapterSuccess,
    createChapterFailure,
    changeChapterNameSuccess,
    changeChapterNameFailure,
    fetchChapterSuccess,
    fetchChapterFailure
} from '../actions/creators'

import { push } from 'react-router-redux'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of'

import CampaignService from '../services/CampaignService'

const campaignService = new CampaignService()

let nextId = 0

export default function(){
    return {
        createChapterRequestEpic: (action$, store) =>
            action$.ofType(CREATE_CHAPTER_REQUEST)
                .mergeMap(action =>  
                    campaignService.saveChapter({chapterTitle: action.chapterTitle})
                        .map(updatedChapterList => createChapterSuccess(updatedChapterList))
                        .catch(error => {
                            Observable.of(createChapterFailure(error));
                        })
                ),

        fetchChapterRequestEpic: action$ =>
            action$.ofType(FETCH_CHAPTER_REQUEST)
                .mergeMap(action =>  
                    campaignService.getChapter({ chapterId: action.chapterId })
                        .map(chapter => fetchChapterSuccess(chapter))
                        .catch(error => {
                            Observable.of(createChapterFailure(error));
                        })
                ),

        changeChapterNameEpic: action$ =>
            action$.ofType(CHANGE_CHAPTER_NAME_REQUEST)
                .debounceTime(200)
                .map(action => changeChapterNameSuccess(action.chapterId, action.newTitle))
                .catch(error => {
                    Observable.of(changeChapterNameFailure(error));
                })
        ,

    }
}

