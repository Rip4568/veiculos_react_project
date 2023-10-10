const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default instance;