module.exports = (req, res, next) => {
    if (req.body.email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(req.body.email.toLowerCase())) {
            next()
        }
        else {
            res.status(400).json({error: "you must provide a valid email address"})
        }
    }
    else {
        res.status(400).json({error: "you must provide an email address"})
    }
}