let express = require('express');
let router = express.Router();

let movies = [
    { title: 'star wars', genre: 'fantasy' },
    { title: 'fast n furious', genre: 'action' }
]

router.get('/', (req, res) => {
    res.send(movies);
})

router.post('/', (req, res) => {
    movies.push(req.body);
    res.send(movies);
})

router.put('/', (req, res) => {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === req.body.title) {
            movies[i].genre = req.body.genre;
            res.send(movies);
            break;
        } else {
            continue;
        }
    }
})

router.delete('/:title', (req, res) => {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === req.params["title"]) {
            movies.splice(i, 1);
            res.send(movies);
            break;
        } else {
            continue;
        }
    }
})

module.exports = router;