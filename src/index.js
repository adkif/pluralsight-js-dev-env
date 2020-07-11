import getUsers from './api/user.api';
import './index.css'
getUsers().then(res => {
    let usersBody = "";
    res.forEach(user => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = usersBody;
});