let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();

app.use(bodyParser.json());

let users = require('./users');
let movies = require('./movies');

app.get('/', (req, res) => {
    res.send("I'm A Get");
})

app.use('/users', users);
app.use('/movies', movies);

app.listen(3000, function () {
    console.log('server connected');
})

module.exports = router;