
const pgPromise = require('pg-promise');
const pgp = pgPromise({});

const config ={
    host :'localhost',
    port:'5432',
    database:'pizza',
    user:'postgres',
    password:'CINTHYA80698'
}
const db = pgp(config);

db.any('select * from pizza').then(res => { console.log(res);});