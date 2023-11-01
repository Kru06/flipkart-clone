const {Redis} = require('ioredis');
const dotenv = require('dotenv')

exports.connectToRedis =async () => {
    const redis = new Redis({
        port: 6379,
        host: `localhost`,
        password: ``,
    })

    return redis
}

