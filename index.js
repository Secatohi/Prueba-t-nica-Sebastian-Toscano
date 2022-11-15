const express = require('express');
const morgan = require('morgan');
//const mongoose = require('mongoose');

const app = express();

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/prueba-tecnica-sebastian-toscano');

// Setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use(require('./routes/data'));


// Starting the server
app.listen(app.set('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
