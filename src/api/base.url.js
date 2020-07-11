const getBaseUrl = () => {
    return getQueryStringParameterByName('userMockApi') ? 'http://localhost:3001/' : '/';
}

const getQueryStringParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

module.exports = getBaseUrl;
