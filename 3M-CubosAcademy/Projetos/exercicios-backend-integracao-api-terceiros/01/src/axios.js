const axios = require('axios')

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '53e1d3f8532e4e62b3a104f03eccd5cf'
    }
})

module.exports = instanciaAxios