import 'whatwg-fetch';

exports.getUsers = () => {
    return get('users');
}

const get = (url) => {
    return fetch(url)
        .then(
            res => {
                return res.json()
            },
            err => console.log(err)
        );
}