var express = require('express');
var router = express.Router();

    pages = [
    {_id:"321", name:"Post 1", websiteId: "456", description: "Lorem"},
    {_id:"432", name:"Post 2", websiteId: "456", description: "Lorem"},
    {_id:"567", name:"Post 3", websiteId: "456", description: "Lorem"}
    ];
pgs = [];
router.post('/api/website/:websiteId/page', function (req, res, next) {
    var page = req.body;
    page._id = 'id' + (new Date()).getTime();
    this.pages.push(page);
    res.json({});
});
router.get('/api/website/:websiteId/page', function (req, res, next) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId == req.params.websiteId) {
                this.pgs.push(this.pages[x]); 
            }
        }
        res.json(this.pgs); 
});
router.get('/api/page/:pageId', function (req, res, next) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == req.params.pageId) {
                res.json(this.pahes[x]);
            }
        }
});
router.put('/api/page/:pageId', function (req, res, next) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == req.params.pageId) {
                this.pages[x] = req.body;
                res.json({});
            }
        }
});
router.post('/api/page/:pageId', function (req, res, next) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == req.params.pageId) {
                this.pages.splice(x,1);
                res.json({});
            }
        }
});

module.exports = router;
