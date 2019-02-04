const axios = require("axios");
const db = require('../models')

module.exports = {
    addBook: function (req, res){
    
        db.Book.create({
            title: req.body.title,
            author: req.body.author,
            priority: req.body.priority,
            UserId: 1
        })
        .then(response => res.send(response))
     },
     
     getBooks: function(req, res){
         db.Book.findAll({
             //need to change the hard-coded user id when auth. in place
             where: {
                UserId: 1
             }
         }).then(response => {
             res.send(response)
         });
     },

     deleteBook: function(req, res){

         db.Book.destroy({
             where: {
                 id: req.params.id
             }
         }).then(response => {
            console.log(`response from db is ${response}`)
             res.send('Item successfully deleted');
         });
     }

}