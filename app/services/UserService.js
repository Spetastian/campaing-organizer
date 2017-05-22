'use strict'
import { ajax } from 'rxjs/observable/dom/ajax';

export default class UserService {
    constructor (authApiUrl){ 
        this.authApiUrl = authApiUrl;
    }

    // Returns an observable
    authenticate (username, password) {
        return ajax.getJSON(`${this.authApiUrl}/login`);
    }
}