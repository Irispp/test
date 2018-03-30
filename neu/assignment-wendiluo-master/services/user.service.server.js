var express = require('express');
var router = express.Router();

users = [
    {_id:"123", username:"alice", password:"alice", firstName:"Alice", lastName:"Wonder"},
    {_id:"234", username:"bob", password:"bob", firstName:"Bob", lastName:"Marley"},
    {_id:"345", username:"charly", password:"charly", firstName:"Charly", lastName:"Garcia"},
    {_id:"789", username:"fiona", password:"fiona", firstName:"Fiona", lastName:"Li"}
];

router.post('/api/user', function(req, res, next) {
    var user = req.body;
    user._id = 'id' + (new Date()).getTime();
    this.users.push(user);
    console.log(users);
    res.json({'code': 0});
});
router.get('/api/user?username=username', function(req, res, next) {
    var username = req.query.username;
    for (let x = 0; x < this.users.length; x++) {
        if (this.users[x].username == username) {
            res.json(this.users[x]);
        }
    }
});
router.get('/api/user', function(req, res, next) {
    var username = req.query.username;
    var password = req.query.password;
    for (let x = 0; x < this.users.length; x++) {
        if (this.users[x].username == username && this.users[x].password == password) {
            res.json(this.users[x]);
        }
    }
});
router.get('/api/user/:userId', findUserById);

function findUserById(req, res, next) {
    var userId = req.params.userId;
    for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                res.json(this.users[x]);
            }
    }
}
router.put('/api/user/:userId', function(req, res, next) {
     var userId = req.params.data;
    for (let x = 0; x < this.users.length; x++) {
        if (this.users[x]._id == userId) {
            this.users[x] = req.body;
            res.json({});
        }
    }
});
router.delete('/api/user/:userId', function(req, res, next) {
        var userId = req.params.userId;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users.splice(x, 1);
                res.json({});
            }
        }
});
module.exports = router;
