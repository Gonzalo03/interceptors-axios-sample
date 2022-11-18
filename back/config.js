const config = {

    jwt: {
        secret: 'secret',
        expiresIn: '10s',
        refreshSecret: 'refresh',
        refreshExpiresIn: '30s'
    }

}

module.exports = config;