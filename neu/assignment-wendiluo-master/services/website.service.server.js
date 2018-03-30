var express = require('express');
var router = express.Router();
    websites = [
     { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
     { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
     { _id: "345", name: "Gizmodo", developerId: "456", description: "Lorem" },
     { _id: "456", name: "Go", developerId: "123", description: "Lorem" },
     { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
     { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
     { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    ];
webs = [];
router.post('/api/user/:userId/website', function(req, res, next) {
    var website = req.body;
    website._id = 'id' + (new Date()).getTime();
    website.developerId = req.params.userId;
    this.websites.push(website);
    res.json({});
});
router.get('/api/user/:userId/website', function(req, res, next) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId == req.params.userId) {
                this.webs.push(this.websites[x]);
            }
        }
        res.json(this.webs);
});
router.get('/api/website/:websiteId', function(req, res, next) {
            for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == req.params.websiteId) {
                res.json(this.websites[x]);
            }
        }
});
router.put('/api/website:websiteId', function(req, res, next) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == req.params.websiteId) {
                this.websites[x] = req.body;
                res.json({});
            }
        }
});
router.delete('/api/website/:websiteId', function(req, res, next) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == req.params.websiteId) {
                this.websites.splice(x, 1);
                res.json({});
            }
        }
});

module.exports = router;
