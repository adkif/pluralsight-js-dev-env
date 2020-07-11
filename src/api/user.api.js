import 'whatwg-fetch';
import getBaseUrl from './base.url';

const baseUrl = getBaseUrl();

const getUsers = () => {
    return get('users');
}

const get = (url) => {
    return fetch(baseUrl + url)
        .then(
            res => {
                return res.json()
            },
            err => console.log(err)
        );
}

module.exports = getUsers;