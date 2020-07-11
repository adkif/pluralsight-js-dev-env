const getBaseUrl = () => {
    const inDevMode = window.location.hostname == 'localhost';
    return inDevMode ? 'http://localhost:3001/' : '/';
}

module.exports = getBaseUrl;