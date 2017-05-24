import {
    CREATE_CHAPTER_REQUEST,
    CHANGE_CHAPTER_NAME_REQUEST
} from '../actions/types'
import {
    createChapterSuccess,
    createChapterFailure,
    changeChapterNameSuccess
} from '../actions/creators'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

let nextId = 0

export default function(){
    return {
        createChapterRequestEpic : action$ =>
            action$.ofType(CREATE_CHAPTER_REQUEST)
                .map(action => createChapterSuccess(nextId++, action.chapterTitle))
                .catch(error => {
                    Observable.of(createChapterFailure(error));
                }),

        changeChapterNameEpic : action$ =>
            action$.ofType(CHANGE_CHAPTER_NAME_REQUEST)
                .debounceTime(200)
                .map(action => changeChapterNameSuccess(action.chapterId, action.newTitle))
                .catch(error => {
                    Observable.of(createChapterFailure(error));
                })
        ,

    }
}

