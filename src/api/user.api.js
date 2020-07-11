import 'whatwg-fetch';
import getBaseUrl from './base.url';

const baseUrl = getBaseUrl();

const User = () => {}

User.getUsers = () => {
    return get('users');
}

User.delete = (id) => {
    return del(`users/${id}`);
}

const del = (url) => {
    const req = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(req).then(
        res => {
            return res.json()
        },
        err => console.log(err)
    );
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

export default User;