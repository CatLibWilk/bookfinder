const router = require('express').Router();
const path = require('path');

router.route('/')
        .get((req, res) => {
            res.json( {message: 'test'} )
        })

module.exports = router;