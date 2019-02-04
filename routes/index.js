const router = require('express').Router();
const path = require('path');
const dbController = require('../controllers/dbController')

router.route('/addBook')
        .post(dbController.addBook)

router.route('/getBooks')
        .get(dbController.getBooks)

router.route('/deleteBook/:id')
        .delete(dbController.deleteBook)
module.exports = router;