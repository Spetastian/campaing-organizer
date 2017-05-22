const config = {
    authApiUrl : ''
};

import { combineEpics } from 'redux-observable';
import loginEpicsCreator from './login-epics';
const { loginRequestEpic, loginSuccessEpic } = loginEpicsCreator(config);

export const rootEpic = combineEpics(
    loginRequestEpic, 
    loginSuccessEpic
);