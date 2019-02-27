const axios = require("axios");
const db = require('../models')
const GKEY = process.env.GOOGLE_APIKEY;


module.exports = {
    getTitles: function( req, res ){
        const title = req.body.title.split(' ').join('+')
        const author = req.body.author
        
        queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${GKEY}`
        console.log(queryUrl)
        axios.get(queryUrl)
                .then(result => {
                    console.log(result.data)
                    res.send(result.data)
                })
    }
}