const  dotenv = require('dotenv');

console.log(process.env.NODE_ENV)

dotenv.config({
    path: `./.env.${process.env.NODE_ENV}.local`,
});