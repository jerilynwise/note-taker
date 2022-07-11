// required packages
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// calls the server
const app = express();

// port to run through Heroku
const PORT = process.env.PORT || 3001;

//parse incoming data and allow app to accept 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// makes the server listen
app.listen(PORT, () => {
    console.log (`API is now on port ${PORT}!`)
});