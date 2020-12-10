const router = require('express').Router();
const Users = require('./usersModel.js');
const validateRegistrationInput = require('../middleware/validateRegistrationInput');
router.post('/register', validateRegistrationInput, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (req.userObject && req.userObject.username === username) {
            res.status(400).json({ error: "that username already exists" })
        }
        else {
            const hash = password;
            const newUserObject = { username, email, password: hash }
            const newUserId = await Users.createUser(newUserObject);
            res.status(201).json({ message: "registration successful", newUserId })
        }
    }
    catch (error) {
        throw error;
        // res.status(500).json({error: "an unknown error occurred while attempting to create the user, see serverErrorMessage for more details", serverErrorMessage: error})
    }
})

module.exports = router;