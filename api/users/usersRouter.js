const router = require('express').Router();
const validateRegistrationInput = require('../middleware/validateRegistrationInput');
router.post('/register', validateRegistrationInput, (req, res) => {
    // res.status(201).json({ message: "registration successful" })
    res.end();
})

module.exports = router;