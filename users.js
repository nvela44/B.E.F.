let express = require('express');
let router = express.Router();

let users = [
    { name: 'joe', id: '1' },
    { name: 'jane', id: '2' },
];

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    users.push(req.body);
    res.send(users);
})

router.put('/', (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === req.body.id) {
            users[i].name = req.body.name;
            res.send(users);
            break;
        } else {
            continue;
        }
    }
})

router.delete('/:id', (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === req.params['id']) {
            users.splice(i, 1);
            res.send(users);
            break;
        } else {
            continue;
        }
    }
})

module.exports = router;