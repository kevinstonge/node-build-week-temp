const db = require('../../data/dbConfig.js');

const createUser = (newUserObject) => {
    db('users').insert(newUserObject).then(r=>r).catch(e=>e);
}

module.exports = { createUser }