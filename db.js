const mongoose = require('mongoose');

//const MONGO_USERNAME = 'sammy';
//const MONGO_PASSWORD = 'password';
//const MONGO_HOSTNAME = '127.0.0.1';
//const MONGO_PORT = '27017';
//const MONGO_DB = 'sharkinfo';

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: ture,
    reconectTires: Number .MAX_VALUE,
    reconectInterval: 500,
    connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then(function() {
    console.log('MongoDB is conected');
}).catch(function(err)) {
    console.log(err);
});
