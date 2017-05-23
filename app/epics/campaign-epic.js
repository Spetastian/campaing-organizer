import {
    CREATE_CHAPTER_REQUEST
} from '../actions/types'
import {
    createChapterSuccess,
    createChapterFailure
} from '../actions/creators'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export default function(){
    return {
        createChapterRequestEpic : action$ =>
            action$.ofType(CREATE_CHAPTER_REQUEST)
                .mapTo(createChapterSuccess(1, action$.chapterTitle))
                .catch(error => {
                    Observable.of(createChapterFailure(error));
                })

    }
}

