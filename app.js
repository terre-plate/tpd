'use strict';

const express = require('express')
const app = express()
//app.use(express.static('gs://static-terre'))
//app.use(express.static('https://storage.googleapis.com/static-terre'))
app.use(express.static('static')) // A changé pour autre chose (cf au dessus ?) (Non en faite)


const path = require('path')
var partialsPath=path.join(__dirname+'/views/partials/'); //Required But Why ?

const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: partialsPath,
  partialsDir: partialsPath
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  //res.status(200).send('<link rel="shortcut icon" type="image/png" href="http://i.omgomg.eu/fes_logo.ico"/>Soyez les bienvenus sur Terre Tiret Plate Dotcom (TPD) bande de fils de putes de touristes intergalactiques !\n<br> JE VOUS DÉTESTE !!!  <img class="img-responsive" src="gs://static-terre/chaton.png" alt="Blockchain" width="600" />  <img class="img-responsive" src="chaton.jpg" alt="Blockchain" width="600" />').end();
    res.render('homepage')
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit (does NOT work on gcloud). ')
});
// [END app]
