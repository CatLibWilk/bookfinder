require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

//middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(routes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.state('client/build'))
};

//add database init stuff when further along

// //true drops tables, false creates if not extant
// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true!
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }


// // Start the API server

// db.sequelize.sync(syncOptions).then(function() {
//       app.listen(PORT, function() {
//         console.log("App listening on PORT " + PORT);
//       });
// });


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`)
})