const db = require('../../data/dbConfig.js');

const createUser = async (newUserObject) => {
    try {
        return await db('users').insert(newUserObject)
    }
    catch (error) {
        throw error;
    }
}

const getUserByUsername = async (username) => {
    try {
        return await db('users').where({ username }).first();
    }
    catch (error) {
        throw error;
    }
}

module.exports = { createUser, getUserByUsername }