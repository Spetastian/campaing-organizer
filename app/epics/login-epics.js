import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actions/types'
import { userLoginSuccess, userLoginFailure } from '../actions/creators'
import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export default function(userService){
    return {
        loginRequestEpic : action$ => 
            action$.ofType(USER_LOGIN_REQUEST)
                .mergeMap(action =>
                    userService.authenticate(action$.username, action$.password)
                        .mapTo(userLoginSuccess())
                        .catch(error => {
                            Observable.of(userLoginFailure(error));
                        })
                    ),

        loginSuccessEpic : action$ => 
            action$.ofType(USER_LOGIN_SUCCESS)
                .mapTo(action$ => replace('/home'))

    }
}

